import { EuroOutlined, SaveOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, Input, Table, Tabs, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Category from "../../../components/product-category/Category";
import { getAllProducts } from "../../../redux/actions/productActions";

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
    width: 87vw;
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

const { TabPane } = Tabs;
const Products = () => {
    const [productImage, setProductImage] = useState(null);
    const [productName, setProductName] = useState(null);
    const [productPrice, setProductPrice] = useState(0.0);
    const [productQuantity, setProductQuantity] = useState(0.0);
    const [productDescription, setProductDescription] = useState(null);

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const [isFormValid, setIsFormValid] = useState(true);

    const imageFileSelectionChangeHandler = (event) => {
        setProductImage(event.target.files[0]);
    };
    const productNameChangeHandler = (event) => {
        setProductName(event.target.value);
    };
    const productPriceChangeHandler = (event) => {
        setProductPrice(event.target.value);
    };
    const productQuantityChangeHandler = (event) => {
        setProductQuantity(event.target.value);
    };
    const productDescriptionChangeHandler = (event) => {
        setProductDescription(event.target.value);
    };

    const performProductSaving = () => {
        alert(
            JSON.stringify(
                {
                    productName,
                    productImage,
                    productDescription,
                    productQuantity,
                    productPrice,
                },
                null,
                2
            )
        );
    };

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const columns = [
        {
            title: "",
            dataIndex: "productImageList",
            key: "productImageList",
            render: (productImageList) => (
                <Avatar
                    shape="square"
                    size={80}
                    src={
                        <Image
                            src={productImageList[0].imageURl}
                            style={{ width: 64 }}
                        />
                    }
                />
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            render: (text, record) => (
                <Link to={`/secure-admin/products/${record.id}`}>{text}</Link>
            ),
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
            render: (category) => <Tag color="geekblue">{category.name}</Tag>,
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
    ];

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
                        <Input
                            type="text"
                            id="product_name"
                            value={productName}
                            onChange={productNameChangeHandler}
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
                            value={productQuantity}
                            onChange={productQuantityChangeHandler}
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
                        <Input
                            addonBefore={<EuroOutlined />}
                            type="number"
                            id="product_price"
                            value={productPrice}
                            onChange={productPriceChangeHandler}
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
                            value={productDescription}
                            onChange={productDescriptionChangeHandler}
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
                        <Button
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                            icon={<SaveOutlined />}
                            type="primary"
                            onClick={performProductSaving}
                            disabled={!isFormValid}
                        >
                            Save Product
                        </Button>
                    </ActionButtonGroup>
                </RegistrationForm>
                <Category />
            </ProductSection>
            <TabsWrapper>
                <Tabs size="large" style={{ width: "100%" }}>
                    <TabPane tab="All" key="1">
                        {products && (
                            <Table columns={columns} dataSource={products} />
                        )}
                    </TabPane>
                    {/* <TabPane tab="Men products" key="2">
                        <p>Second tab</p>
                    </TabPane> */}
                </Tabs>
            </TabsWrapper>
        </Container>
    );
};

export default Products;
