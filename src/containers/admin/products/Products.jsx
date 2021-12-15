import React, { useState } from "react";
import styled from "styled-components";
import Category from "../../../components/product-category/Category";
import { Tabs } from "antd";
// import { useDispatch } from "react-redux";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 16px;
`;

const ProductSection = styled.div`
    display: flex;
    justify-content: center;
`;

const TabsWrapper = styled.div`
    width: 90vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
    border: 1px solid rgba(227, 227, 227, 0.44);
    margin-top: 16px;
`;

const ProductImagePreview = styled.div`
    width: 280px;
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background: url(${({ image }) => image && URL.createObjectURL(image)})
        no-repeat center center;
`;

const ImageLabel = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px dashed #d9dfe7;
    justify-content: center;
    align-items: center;
    background: rgba(227, 227, 227, 0.3);
    & label {
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
        color: #bfc0c0;
        display: flex;
        &:hover {
            background: rgba(30, 30, 30, 0.16);
            transition: all 0.6s ease;
        }
    }
    & input {
        display: none;
    }
`;

const RegistrationForm = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    border: 1px solid #d9dfe7;
    padding: 8px;
    margin-left: 8px;
`;

const FormInputField = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 2px;
`;

const ActionButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 8px;
`;

const ActionButton = styled.button`
    padding: 8px;
    border: none;
    background: #1a6692;
    font-size: 12px;
    color: white;
`;
const { TabPane } = Tabs;
const Products = () => {
    const [productImage, setProductImage] = useState(null);

    const imageFileSelectionChangeHandler = (event) =>
        setProductImage(event.target.files[0]);

    return (
        <Container>
            <h1 style={{ color: "#868686", fontSize: 32 }}>
                Product management!
            </h1>
            <ProductSection>
                <ProductImagePreview image={productImage}>
                    <ImageLabel>
                        <label htmlFor="product_image">Choose image</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={imageFileSelectionChangeHandler}
                            id="product_image"
                        />
                    </ImageLabel>
                </ProductImagePreview>
                <RegistrationForm>
                    <FormInputField>
                        <label htmlFor="product_name">Product name</label>
                        <input
                            type="text"
                            id="product_name"
                            style={{
                                padding: 4,
                                width: "70%",
                                border: ".5px solid lightgray",
                            }}
                            placeholder="Product name"
                        />
                    </FormInputField>
                    <FormInputField>
                        <label htmlFor="product_qte">Quantity</label>
                        <input
                            type="number"
                            id="product_qte"
                            style={{
                                padding: 4,
                                width: "70%",
                                border: ".5px solid lightgray",
                            }}
                        />
                    </FormInputField>
                    <FormInputField>
                        <label htmlFor="product_price">Price</label>
                        <input
                            type="number"
                            id="product_price"
                            style={{
                                padding: 4,
                                width: "70%",
                                border: ".5px solid lightgray",
                            }}
                        />
                    </FormInputField>
                    <FormInputField>
                        <label htmlFor="product_desc">Description</label>
                        <textarea
                            id="product_desc"
                            style={{
                                padding: 4,
                                resize: "none",
                                width: "70%",
                                height: 150,
                                border: ".5px solid lightgray",
                            }}
                            placeholder="Product description"
                        />
                    </FormInputField>
                    <ActionButtonGroup>
                        <ActionButton>Save Product</ActionButton>
                    </ActionButtonGroup>
                </RegistrationForm>
                <Category />
            </ProductSection>
            <TabsWrapper>
                <Tabs>
                    <TabPane tab="Women products" key="1">
                        <p>One tab</p>
                    </TabPane>
                    <TabPane tab="Men products" key="2">
                        <p>Second tab</p>
                    </TabPane>
                </Tabs>
            </TabsWrapper>
        </Container>
    );
};

export default Products;
