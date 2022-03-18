import { Button, Spin, Table, Layout, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import '../../css/home.css';
import 'antd/dist/antd.css';
import moment from 'moment';
import HomeStore from '../../store/homeStore';


const { Content, Footer } = Layout;

interface IHomeProps {
}

interface IHomeStates {
    showLoading: any;
    showModal: any;
    markerSummariesData: any;
    selectedMarkerSummaries: any;
    marketTicket: any;
}

interface Market {
    MarketName: string;
}

export default class Home extends React.Component<IHomeProps, IHomeStates>{

    constructor(props: any) {
        super(props);
        this.state = {
            showLoading: true,
            showModal: false,
            markerSummariesData: [],
            selectedMarkerSummaries: [],
            marketTicket: [],
        }
    }

    public componentDidMount() {
        this.getInitialData();
    }


    showModal = async (market: Market) => {

        const data = await HomeStore.getTicker(market.MarketName);
        var result = [];
        result.push(data.data.result);

        await this.setState({ marketTicket: result });
        await this.setState({ selectedMarkerSummaries: market });

        await this.setState({ showLoading: false });
        await this.setState({ showModal: true });
    }

    generateColumns = () => {
        const col =
            [
                {
                    title: 'Market Name',
                    dataIndex: 'MarketName',
                    key: 'MarketName',
                },
                {
                    title: 'Created',
                    dataIndex: 'Created',
                    key: 'Created',
                    render: ((date: Date) => moment(date).format('DD-MM-YYYY hh:mm:ss'))
                },
                {
                    title: 'High',
                    dataIndex: 'High',
                    key: 'High',
                },
                {
                    title: 'Low',
                    dataIndex: 'Low',
                    key: 'Low',
                },
                {
                    title: 'Volume',
                    dataIndex: 'Volume',
                    key: 'Volume',
                },
                {
                    title: 'OpenBuyOrders',
                    dataIndex: 'OpenBuyOrders',
                    key: 'OpenBuyOrders',
                },
                {
                    title: '',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: ((_: any, record: Market) =>
                        <>
                            <Button
                                onClick={() =>
                                    this.setState({
                                        showLoading: true
                                    }, () => this.showModal(record))
                                }
                                style={{ border: 'none', marginInline: 5 }}
                            >
                                <SearchOutlined style={{ color: "#1890ff" }} />
                            </Button>
                        </>
                    )
                },
            ]

        return col;
    }

    generateColumnsDetail = () => {
        const col =
            [
                {
                    title: 'Ask',
                    dataIndex: 'Ask',
                    key: 'Ask',
                },
                {
                    title: 'Bid',
                    dataIndex: 'Bid',
                    key: 'Bid',
                },
                {
                    title: 'Last',
                    dataIndex: 'Last',
                    key: 'Last',
                },
            ]

        return col;
    }

    async getInitialData() {
        const data = await HomeStore.getMarketSummaries();
        this.setState(
            {
                markerSummariesData: Array.from(data.data.result)
            }, () => this.setState({ showLoading: false }))
    }


    render() {
        return (
            <Spin spinning={this.state.showLoading}>
                <Layout className='home-layout'>
                    <Content className='home-content'>
                        <div className='home-container'>
                            <Table
                                columns={this.generateColumns()}
                                dataSource={this.state.markerSummariesData}
                                style={{ padding: 30 }}
                            />
                        </div>
                    </Content>
                    <Footer className='home-footer'>Market Summaries ©2022 Created by Cristian Garay</Footer>
                </Layout >

                <Modal
                    title={this.state.selectedMarkerSummaries.MarketName}
                    centered
                    visible={this.state.showModal}
                    width={'70%'}
                    footer={null}
                    onCancel={() => this.setState({ showModal: false })}
                >
                    <Table
                        columns={this.generateColumnsDetail()}
                        dataSource={this.state.marketTicket}
                        pagination={false}
                    />
                </Modal>
            </Spin>
        )
    }
}

