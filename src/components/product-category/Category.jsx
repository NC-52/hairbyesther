import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Input, Modal, Select } from "antd";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import { useDispatch } from "react-redux";
import {
    allCategories,
    newCategory,
} from "../../redux/actions/categoryActions";
import * as feedbacks from "../ui-feedbacks/messages/messages";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(227, 227, 227, 0.44);
    margin-left: 8px;
    padding: 8px;
    & h5 {
        font-size: 14px;
        color: #5d5f61;
    }
`;
const { Option } = Select;
const Category = () => {
    const [showModal, setShowModal] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState(null);
    const [isOnGoingApiCall, setOngoingApiCall] = useState(false);

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories);

    const handleOkButton = () => {
        setOngoingApiCall(true);
        const catData = {
            name: newCategoryName,
        };
        dispatch(newCategory(catData))
            .then((response) => {
                if (response.status === 201) {
                    // 201 === HttpStatus.CREATED
                    feedbacks.success("Category created!");
                }
                dispatch(allCategories());
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    // 400 === HttpStatus.BAD_REQUEST
                    feedbacks.error(error.response.data);
                }
            });
        setOngoingApiCall(false);
        setShowModal(false);
        setNewCategoryName(null);
    };

    const handleCancelButton = () => {
        setShowModal(false);
    };

    const handleCategorySelectChange = (event) => {
        console.log(event);
    };

    useEffect(() => {
        dispatch(allCategories());
    }, []);

    return (
        <Container>
            <h5>Category selection</h5>
            <Select
                defaultValue={categories.length === 0 ? "Empty" : "Choose"}
                onChange={handleCategorySelectChange}
                allowClear
            >
                {categories &&
                    categories.map((category, index) => (
                        <Option key={index} value={category.name}>
                            {category.name}
                        </Option>
                    ))}
            </Select>
            <Button
                type="primary"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 8,
                }}
                icon={<PlusOutlined />}
                onClick={() => setShowModal(true)}
            >
                New category
            </Button>
            <Modal
                centered
                title="Add new category"
                visible={showModal}
                onOk={handleOkButton}
                onCancel={handleCancelButton}
                footer={[
                    <Button key="back" onClick={handleCancelButton}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        loading={isOnGoingApiCall}
                        onClick={handleOkButton}
                    >
                        Save
                    </Button>,
                ]}
            >
                <div>
                    <p>Specify new category name</p>
                    <Input
                        value={newCategoryName}
                        placeholder="type category name"
                        allowClear
                        onChange={(e) => setNewCategoryName(e.target.value)}
                    />
                </div>
            </Modal>
        </Container>
    );
};

export default Category;
