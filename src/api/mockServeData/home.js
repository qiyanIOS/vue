import Mock from 'mockjs'

let list = []
export default {
    getStatisticalData: () => {

        for (let i = 0; i < 10; i++) {
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
            code: 200,
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
                        dnew: 1200,
                        active: 200
                    },
                    {
                        data: '周二',
                        dnew: 1670,
                        active: 300
                    },
                    {
                        data: '周三',
                        dnew: 900,
                        active: 600
                    },
                    {
                        data: '周四',
                        dnew: 2000,
                        active: 200
                    },
                    {
                        data: '周五',
                        dnew: 9000,
                        active: 100
                    },
                    {
                        data: '周六',
                        dnew: 5500,
                        active: 100
                    },
                ],
                orderData: {
                    date: ['2019-01', '2019 - 02', '2019-03', '2019 - 04', '2019-05', '2019-06', '2019-07', '2019-08'],
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