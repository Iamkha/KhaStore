import React from 'react';
import SidebarAccount from './SidebarAccount';
import { useFormik } from 'formik';
import Input from '../customs/Input';
import CheckInput from '../customs/CheckInput';

const AddNewAddress = () => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      lastName: '',
      firtName: '',
      phone: '',
      road: '',
      wards: '',
      fullName: '',
      country: '',
      city: '',
    },
    // validationSchema: registerSchema,
    onSubmit: (values, actions) => {},
  });

  return (
    <div className="w-full flex justify-center mt-[50px] ">
      <div className="w-[1290px] flex justify-between">
        <SidebarAccount title="Address Book"> </SidebarAccount>

        <div className="w-full pl-[20px]  mb-[100px]">
          <h1 className="text-[40px] font-light mb-[30px]">Address New Book</h1>
          <form className="w-full">
            <div className="flex justify-between w-full ">
              <div className="w-[48%] h-auto">
                <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
                  <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Contact Information</p>
                </div>
                <Input
                  id={'firtName'}
                  errors={touched.firtName && errors.firtName}
                  value={values.firtName}
                  setonChange={handleChange}
                  name="Tên"
                />
                {touched.firtName && errors.firtName && (
                  <p className="text-[12px] text-red-500 mt-[8px]">{errors.firtName}</p>
                )}

                <div className="mt-[10px]">
                  <Input
                    id={'lastName'}
                    errors={touched.lastName && errors.lastName}
                    // value={values.lastName}
                    value="sadasdas"
                    setonChange={handleChange}
                    name="Họ"
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
                  )}
                </div>
                <div className="mt-[10px]">
                  <Input
                    id={'lastName'}
                    errors={touched.lastName && errors.lastName}
                    value={values.lastName}
                    setonChange={handleChange}
                    name="Họ"
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
                  )}
                </div>
                <div className="mt-[10px]">
                  <Input
                    id={'lastName'}
                    errors={touched.lastName && errors.lastName}
                    value={values.lastName}
                    setonChange={handleChange}
                    name="Họ"
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="w-[48%]">
                <div className="boder border-b-[1px] border-b-slate-400 py-[10px] mb-[20px]  ">
                  <p className="text-[22px]  leading-[29px] w-[201.98px] font-light">Address</p>
                </div>
                <Input
                  id={'firtName'}
                  errors={touched.firtName && errors.firtName}
                  value={values.firtName}
                  setonChange={handleChange}
                  name="Tên"
                />
                {touched.firtName && errors.firtName && (
                  <p className="text-[12px] text-red-500 mt-[8px]">{errors.firtName}</p>
                )}
                <div className="mt-[10px]">
                  <Input
                    id={'lastName'}
                    errors={touched.lastName && errors.lastName}
                    value={values.lastName}
                    setonChange={handleChange}
                    name="Họ"
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
                  )}
                </div>
                <div className="mt-[10px]">
                  <Input
                    id={'lastName'}
                    errors={touched.lastName && errors.lastName}
                    value={'kha'}
                    setonChange={handleChange}
                    name="Họ"
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
                  )}
                </div>

                <div className="mt-[10px]">
                  <Input
                    id={'lastName'}
                    errors={touched.lastName && errors.lastName}
                    value={values.lastName}
                    setonChange={handleChange}
                    name="Họ"
                  />
                  {touched.lastName && errors.lastName && (
                    <p className="text-[12px] text-red-500 mt-[8px]">{errors.lastName}</p>
                  )}
                </div>
                <div className="my-[20px]">
                  <CheckInput
                    // onChange={onChangeAllowRemote}
                    // showPassword={allowRemote}
                    title="Use as my default billing address "
                    id="billingAddress"
                  />
                </div>
                <div className="my-[20px]">
                  <CheckInput
                    // onChange={onChangeAllowRemote}
                    // showPassword={allowRemote}
                    title="Use as my default shipping address"
                    id="shippingAddress"
                  />
                </div>
              </div>
            </div>
            <button
              className=" mt-[20px] font-semibold text-white bg-sky-700 hover:bg-sky-600 px-[20px] py-[10px]"
              type="submit"
            >
              Save Address
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddress;
