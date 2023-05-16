import { useEffect, useState } from 'react'
import { Badge, Button, Descriptions, Form, Input, Modal, Select, Space, Table, Tag, Tooltip } from 'antd';
import styled from 'styled-components';
import { EditOutlined, ProfileOutlined } from '@ant-design/icons';


const TableTTT = styled(Table)`
  .ant-pagination-item-active {
    border-color: #ff0000;
    &:hover {
        border-color: #3a0000;
    }

    a {
        color: #ff0000;
        &:hover {
            color: #3a0000;
        }
    }
  }
`;

const Antd = () => {
    const [data, setData] = useState([])
    const columns = [
        {
            title: 'Barcode',
            dataIndex: 'barcode',
            key: 'barcode',
            width: 150,
            align: "center",
            render: (text, obj) => obj.status == "ซ้ำ" ? <a><u>{text}</u> <Badge dot /></a> : text,
        },
        {
            title: 'Vender',
            dataIndex: 'vender',
            key: 'vender',
            filters: [
                {
                    text: 'แคเรียร์ โกลบอล คอร์ปอเรชั่น',
                    value: 'แคเรียร์ โกลบอล คอร์ปอเรชั่น',
                },
                {
                    text: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
                    value: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
                },
            ],
            onFilter: (value, record) => record.vender.indexOf(value) === 0,
            width: 200,
            ellipsis: true,
            render: (text) => <Tooltip title={text}>{text}</Tooltip>,
        },
        {
            title: 'Product Group',
            dataIndex: 'product_group',
            key: 'product_group',
            width: 220,
            ellipsis: true,
            render: (text) => <Tooltip title={text}>{text}</Tooltip>,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
            width: 150,
            filters: [
                {
                    text: 'CARRIER',
                    value: 'CARRIER',
                },
                {
                    text: 'DAIKIN',
                    value: 'DAIKIN',
                },
                {
                    text: 'LYNN',
                    value: 'LYNN',
                },
            ],
            onFilter: (value, record) => record.brand.indexOf(value) === 0,
        },
        {
            title: 'Product Description',
            dataIndex: 'item_ext',
            key: 'item_ext',
            width: 350,
            ellipsis: true,
            render: (text) => <Tooltip title={text}>{text}</Tooltip>,
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: 150,
            sorter: (a, b) => a.vender.length - b.vender.length,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            fixed: "right",
            width: 110,
            align: "center",
            render: (text, obj) => text == 'ซ้ำ' ? <Tag color="error">{text}</Tag> : <Tag color="processing">{text}</Tag>,
            filters: [
                {
                    text: 'OFF',
                    value: 'OFF',
                },
                {
                    text: 'Pending',
                    value: 'Pending',
                },
                {
                    text: 'ON',
                    value: 'ON',
                },
            ],
        },
        {
            title: 'ตัวเลือก',
            dataIndex: '',
            key: '',
            fixed: "right",
            width: 130,
            align: "center",
            render: (text, obj) => (
                <>
                    <EditOutlined onClick={() => addEdit("edit", text)} /> |
                    <ProfileOutlined onClick={() => setIsModalOpen(true)} />
                </>
            )
        },
    ];

    const _data = [
        {
            key: '1',
            barcode: '8858802798302',
            brand: 'LYNN',
            product_group: 'LYNN ประตูUPVC ภายนอก ลูกฟักลายไม้ FT',
            item_ext: 'LYNN ประตูUPVC ภายนอกลูกฟัก 90x200cm ขาว FT06 เจาะลูกบิด',
            status: 'ใหม่',
            date: "08/05/2023 08:10",
            vender: 'บริษัทธรรมสรณ์',
        },
        {
            key: '2',
            barcode: '8858802798296',
            brand: 'LYNN',
            product_group: 'LYNN ประตูUPVC ภายนอก ลูกฟักลายไม้ FT',
            item_ext: 'LYNN ประตูUPVC ภายนอกลูกฟัก 90x200cm ขาว FT05 เจาะลูกบิด',
            status: 'ใหม่',
            date: "08/05/2023 08:10",
            vender: 'บริษัทธรรมสรณ์',
        },
        {
            key: '3',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '4',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '5',
            barcode: '2000000000794',
            brand: 'CARRIER',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '6',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '7',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '8',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '9',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '10',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '11',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },
        {
            key: '12',
            barcode: '2000000000794',
            brand: 'DAIKIN',
            product_group: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC',
            item_ext: 'DAIKIN SKYAIR Round Flow Cassette Inverter: FCFC 24000BTU Panel: Fresh White  1 Phase',
            status: 'ซ้ำ',
            date: "08/05/2023 08:10",
            vender: 'บริษัท ไดกิ้น อินดัสทรีส์ (ประเทศไทย) จำกัด (สำนักงานใหญ่)',
        },

    ];

    useEffect(() => {
        setData(_data)
    }, [])


    //  modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    //  modal Add Edit
    const [isModalAddEdit, setIsModalAddEdit] = useState(false);
    const [mode, setMode] = useState("add");
    const [form] = Form.useForm();

    const handleOkAddEdit = () => {
        form.submit()
    };

    const handleCancelAddEdit = () => {
        setIsModalAddEdit(false);
        form.resetFields()
    };

    const addEdit = (_mode, item) => {
        setMode(_mode)
        setIsModalAddEdit(true)
        if (_mode == "edit") {
            form.setFieldsValue(item)
        }
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 10 },
    };

    const onFinish = (value) => {

        const _data = data;
        if (mode == "add") {
            _data.push({
                key: _data.length + 1,
                barcode: value.barcode,
                brand: value.brand,
                product_group: value.product_group,
                item_ext: value.item_ext,
                status: 'ใหม่',
                date: "08/05/2023 08:10",
                vender: 'บริษัทธรรมสรณ์',
            })
            setData([..._data])
        } else {
            const key = form.getFieldValue("key");
            const index = _data.findIndex(where => where.key == key);
            console.log('index :>> ', index);
            _data[index] = {
                key: _data.length + 1,
                barcode: value.barcode,
                brand: value.brand,
                product_group: value.product_group,
                item_ext: value.item_ext,
                status: 'ใหม่',
                date: "08/05/2023 08:10",
                vender: 'บริษัทธรรมสรณ์',
            }
            setData([..._data])
        }
        handleCancelAddEdit()
    }

    return (
        <>
            <Button onClick={() => addEdit("add", undefined)}>เพิ่ม</Button>
            <TableTTT columns={columns} dataSource={data} />

            <Modal width={1000} centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="เลือก" cancelText="ยกเลิก" >
                <Descriptions bordered column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }} contentStyle={{ width: 700 }}>
                    <Descriptions.Item label="SKU"></Descriptions.Item>
                    <Descriptions.Item label="Universal Barcode">8858802798296</Descriptions.Item>
                    <Descriptions.Item label="Internal Barcode">-</Descriptions.Item>
                    <Descriptions.Item label="Vender">บริษัทธรรมสรณ์</Descriptions.Item>
                    <Descriptions.Item label="Product Group">LYNN ประตูUPVC ภายนอก ลูกฟักลายไม้ FT</Descriptions.Item>
                    <Descriptions.Item label="Brand">LYNN</Descriptions.Item>
                    <Descriptions.Item label="Category">{`หน้าต่าง ประตู รั้ว > ประตู > บานเปิด > แบบเดี่ยว`}</Descriptions.Item>
                    <Descriptions.Item label="Product Description">LYNN ประตูUPVC ภายนอกลูกฟัก 90x200cm ขาว FT05 เจาะลูกบิด</Descriptions.Item>
                    <Descriptions.Item label="หน่วยขาย">EA</Descriptions.Item>
                    <Descriptions.Item label="Size">90x200cm</Descriptions.Item>
                    <Descriptions.Item label="ลาย">FT05</Descriptions.Item>
                    <Descriptions.Item label="Color">WHITE</Descriptions.Item>
                    <Descriptions.Item label="Model">FT05-90200-WH-D</Descriptions.Item>
                </Descriptions>
            </Modal>

            <Modal title="จัดการ" width={600} centered open={isModalAddEdit} onOk={handleOkAddEdit} onCancel={handleCancelAddEdit} okText="เลือก" cancelText="ยกเลิก" >
                <Form
                    {...layout}
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item name="barcode" label="Barcode" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="brand" label="Brand" rules={[{ required: true }]}>
                        <Select
                            allowClear
                        >
                            <Select.Option value="LYNN">LYNN</Select.Option>
                            <Select.Option value="DAIKIN">DAIKIN</Select.Option>
                            <Select.Option value="CARRIER">CARRIER</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="product_group" label="Product Group" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="item_ext" label="Item Ext" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Button onClick={() => console.log('form :>> ', form.getFieldValue())}>get value</Button>
                    <Button onClick={() => form.setFieldValue("barcode", "11111")}>Set barcode = 11111</Button>
                    <Button onClick={() => form.resetFields()}>reset</Button>
                </Form>
            </Modal >
        </>
    )
}

export default Antd