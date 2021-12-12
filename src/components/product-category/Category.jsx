import React, {useState} from 'react'
import styled from "styled-components";
import {Button, Modal, Select} from "antd";

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(227,227,227,0.44);
  margin-left: 8px;
  padding: 8px;
  & h5{
    font-size: 14px;
    color: #5d5f61;
  }
`
const {Option} = Select
const Category = () => {
    const [showModal, setShowModal] = useState(false)

    const handleOkButton = () => {
        setShowModal(false)
    }
    const handleCancelButton = () => {
        setShowModal(false)
    }

    return <Container>
        <h5>Category selection</h5>
        <Select defaultValue='women' allowClear>
            <Option value='women'>women</Option>
            <Option value='men'>men</Option>
        </Select>
        <Button type='primary' style={{marginTop: 8}} onClick={() => setShowModal(true)}>New category</Button>
        <Modal
            centered
            title='Add new category'
            visible={showModal}
            onOk={handleOkButton}
            onCancel={handleCancelButton}
            footer={[
                <Button key="back">Cancel</Button>,
                <Button key="submit" type="primary" loading={true}>Save</Button>
            ]}
        >
            <p>Category information</p>
        </Modal>
    </Container>
}

export default Category
