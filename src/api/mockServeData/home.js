import Mock from 'mockjs'

let list = []
export default {
    getStatisticalData: () => {

        for (let i = 0; i < 6; i++) {
            list.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    华为: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    洛基亚: Mock.Random.float(100, 8000, 0, 0),
                })
            )

        }
        return {
            code: 20000,
            data: {
                videoData: [
                    {
                        name: '小米',
                        value: 2999,
                    },
                    {
                        name: 'Apple',
                        value: 6999,
                    },
                    {
                        name: '华为',
                        value: 3999,
                    },
                    {
                        name: '三星',
                        value: 1999,
                    },
                    {
                        name: '魅族',
                        value: 1499,
                    },
                    {
                        name: '洛基亚',
                        value: 999,
                    }
                ],
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 7,
                        active: 300
                    },
                    {
                        data: '周三',
                        new: 5,
                        active: 600
                    },
                    {
                        data: '周四',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周五',
                        new: 5,
                        active: 100
                    },
                ],
                orderData: {
                    date: ['2019-01', '2019 - 02', '2019-03', '2019 - 04', '2019-05', '2019-06', '2019-07'],
                    data: list
                },
                tableData: [
                    {
                        name: "Apple",
                        todybuys: 100,
                        monthbuys: 300,
                        totalbuys: 500,
                    },
                    {
                        name: "华为",
                        todybuys: 100,
                        monthbuys: 300,
                        totalbuys: 500,
                    },
                    {
                        name: "小米",
                        todybuys: 100,
                        monthbuys: 300,
                        totalbuys: 500,
                    },
                    {
                        name: "魅族",
                        todybuys: 100,
                        monthbuys: 300,
                        totalbuys: 500,
                    },
                    {
                        name: "三星",
                        todybuys: 100,
                        monthbuys: 300,
                        totalbuys: 500,
                    },
                    {
                        name: "洛基亚",
                        todybuys: 100,
                        monthbuys: 300,
                        totalbuys: 500,
                    },
                ],

            }
        }
    }
}