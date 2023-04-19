import React, { useEffect, useState } from 'react';
import Notification from '../Home/Notification';
import SizeBar from './SizeBar';
import HeaderProduct from './HeaderProduct';
import Product from './Product';
import { categoryMen, colorMen, materialMen, sizeMen } from '../data/fakeData';
import { child, get, ref } from 'firebase/database';
import { database } from '../../firebase';

const Nam = () => {
  const [data, setData] = useState([{ src: [] }]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `product`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dbRef, data]);
  const dataProduct = data.filter((data) => data.for === 'nam');
  return (
    <div>
      <Notification />
      <div className="w-full flex justify-center">
        <div className=" w-[1290px] flex justify-between">
          <SizeBar
            title={'Nam'}
            materialData={materialMen}
            categoryData={categoryMen}
            colorData={colorMen}
            sizeData={sizeMen}
          />
          <div className="w-full ml-[25px]">
            <HeaderProduct
              src="https://onoff.vn/media/import/banneronoff/Web/banner/nam-291122.jpg"
              title="SẢN PHẨM NAM"
            />
            <Product data={dataProduct} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nam;
