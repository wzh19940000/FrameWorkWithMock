const faker = require("faker");
faker.locale = "zh_CN";

const uids = []
for (let i = 0; i < 6; i++) {
    uids.push(faker.random.uuid())
}
const place = {
    provinces: [{
        name: '浙江',
        uid: uids[0],
        children: [uids[1], uids[2]]
    }, {
        name: '江苏',
        uid: uids[3],
        children: [uids[4], uids[5]]
    }],
    cities: [{
        name: '杭州',
        uid: uids[1]
    }, {
        name: '温州',
        uid: uids[2]
    }, {
        name: '南京',
        uid: uids[4]
    }, {
        name: '苏州',
        uid: uids[5]
    }]
}
const education = [{
    label: '初中',
    value: faker.random.uuid()
}, {
    label: '高中',
    value: faker.random.uuid()
}, {
    label: '大学',
    value: faker.random.uuid()
}, {
    label: '硕士',
    value: faker.random.uuid()
}, {
    label: '博士',
    value: faker.random.uuid()
}]
const randomSelect = arr => arr[Math.floor(Math.random() * arr.length)]
module.exports = () => {
    const data = {
        users: [],
        place,
        education
    };
    for (let i = 0; i < 10; i++) {
        const province = randomSelect(place.provinces)
        const city = randomSelect(province.children)
        data.users.push({
            uid: faker.random.uuid(),
            name: faker.name.firstName() + faker.name.lastName(),
            city: {
                uid: [province.uid, city],
                name: [province.name, place.cities.find(({ uid }) => uid === city).name]
            },
            graduationDate: faker.date.past(5),
            education: randomSelect(education),
            phone: faker.phone.phoneNumber(),
            gender: Math.random() > 0.5 ? '男' : '女'
        });
    }
    return data;
};
