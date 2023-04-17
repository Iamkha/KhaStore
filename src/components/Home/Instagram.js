import React, { useEffect, useState } from 'react';
import InstagramImg from '../customs/InstagramImg';
import { child, get, ref } from 'firebase/database';
import { database } from '../../firebase';

const Instagram = () => {
  const [data, setData] = useState([]);
  const dbRef = ref(database);

  useEffect(() => {
    get(child(dbRef, `intagram`))
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
  return (
    <div className="flex overflow-hidden">
      {data.map((d) => (
        <div key={d.id}>
          <InstagramImg
            hoverImg="https://onoff.vn/static/version1673509780/frontend/Of/default/en_US/images/bg_ins.png"
            img={d.src}
          />
        </div>
      ))}
    </div>
  );
};

export default Instagram;
