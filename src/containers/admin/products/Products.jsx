import React, {useState} from "react";
import styled from "styled-components";
import Category from "../../../components/product-category/Category";
import {Button} from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px;
`

const ProductSection = styled.div`
  display: flex;
  justify-content: center;
`

const ProductImagePreview = styled.div`
  width: 280px;
  height: 330px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background: url(${({image}) => image && URL.createObjectURL(image)}) no-repeat center center;
`

const ImageLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px dashed #d9dfe7;
  justify-content: center;
  align-items: center;
        background: rgba(227,227,227,0.3);
  & label{
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      color: #bfc0c0;
      display: flex;
      &:hover{
        background: rgba(30,30,30,0.16);
        transition: all .6s ease;
      }
  }
  & input{
    display: none;
  }
`

const RegistrationForm = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d9dfe7;
  padding: 8px;
  margin-left: 8px;
`

const FormInputField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 2px;
`

// const ProductCategory = styled.div`
//   width: 320px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   border: 1px dashed lightblue;
//   margin-left: 8px;
// `

const Products = () => {
    const [productImage, setProductImage] = useState(null)

    const imageFileSelectionChangeHandler = event => setProductImage(event.target.files[0])

    return <Container>
        <h1 style={{color: '#868686', fontSize: 32}}>Product management!</h1>
        <ProductSection>
            <ProductImagePreview image={productImage}>
                <ImageLabel>
                    <label htmlFor="product_image">Choose image</label>
                    <input type="file" accept="image/*" onChange={imageFileSelectionChangeHandler} id='product_image'/>
                </ImageLabel>
            </ProductImagePreview>
            <RegistrationForm>
                <FormInputField>
                    <label htmlFor="product_name">Product name</label>
                    <input type="text" id='product_name'
                           style={{padding: 4, width: '70%', border: '.5px solid lightgray'}}
                           placeholder='Product name'/>
                </FormInputField>
                <FormInputField>
                    <label htmlFor="product_qte">Quantity</label>
                    <input type="number" id="product_qte"
                           style={{padding: 4, width: '70%', border: '.5px solid lightgray'}}/>
                </FormInputField>
                <FormInputField>
                    <label htmlFor="product_price">Price</label>
                    <input type="number" id="product_price"
                           style={{padding: 4, width: '70%', border: '.5px solid lightgray'}}/>
                </FormInputField>
                <FormInputField>
                    <label htmlFor="product_desc">Description</label>
                    <textarea
                        id="product_desc"
                        style={{padding: 4, resize: 'none', width: '70%', height: 150, border: '.5px solid lightgray'}}
                        placeholder="Product description"/>
                </FormInputField>
                <Button disabled type="primary" style={{marginTop: 16}}>Save Product</Button>
            </RegistrationForm>
            <Category/>
        </ProductSection>
    </Container>
}

export default Products
