import React from 'react'
import { Space, Table, Tag } from 'antd';
import styled from 'styled-components';


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


const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = []
for (let index = 0; index < 200; index++) {
    data.push({
        key: index,
        name: 'John Brown' + index,
        age: 32 + index,
        address: 'New York No. 1 Lake Park' + index,
        tags: ['nice', 'developer'],
    })
}
console.log('data :>> ', data);

const Antd = () => {

    return (
        <>
            <TableTTT columns={columns} dataSource={data} />
        </>
    )
}

export default Antd