export const Items1 = [
    {
        name:"hung3",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"huưeqe",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"hutry",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"htrỷy",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"hufghf",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"huvbcbvcg",
        date:"1/1/2023",
        cost:"20$"
    }
];
export const Items2 = [
    {
        name:"hung3",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"huưeqe",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"hutry",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"htrỷy",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"hufghf",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"huvbcbvcg",
        date:"1/1/2023",
        cost:"20$"
    }
];
export const Items3 = [
    {
        name:"hung3",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"huưeqe",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"hutry",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"htrỷy",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"hufghf",
        date:"1/1/2023",
        cost:"20$"
    },
    {
        name:"huvbcbvcg",
        date:"1/1/2023",
        cost:"20$"
    }
];
export const convertDateToTMDHM = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const hour = d.getHours();
    const minute = d.getMinutes();
    return `${year}年${month}月${day}日 ${hour}時${minute}分`;
    };