const spendingsDataHelper = {
    prepareDataForStackedBarChart(data) {
        // let result = {
        //     Ymax: 999,
        //     data: [
        //         {
        //             "year": 2018,
        //             "month": "Jul",
        //             "catagory": "Health",
        //             "start": 0,
        //             "end": 10,
        //             "value": 10
        //         }
        //     ],
        //     monthly_total: [
        //         {
        //             month: "Jul",
        //             total: 999
        //         }
        //     ]
        // };

        const Ymax = Math.max(...data.map(a => a.total));

        let stackedData = [];
        let monthly_total = {};
        for (let o of data) {
            let cumulative = 0;
            for (let key in o.all_catagories) {
                let obj = {};
                obj.year = o.year;
                obj.month = o.month;
                obj.name = key;
                obj.start = cumulative;
                cumulative += o.all_catagories[key].total;
                obj.end = cumulative;
                obj.value = o.all_catagories[key].total;

                stackedData.push(obj);
            }

            monthly_total[o.month] = o.total;
            cumulative = 0;
        }

        console.log(stackedData);
        return {
            Ymax: Ymax,
            data: stackedData,
            monthly_total: monthly_total
        };
    },

    prepareDataForWaterfallChart(data, month) {
        let month_data = data.filter(a => a.month === month)[0];
        let cumulative = 0;
        let waterfall_data = [];

        for (let key in month_data.all_catagories) {
            console.log(key);
            let obj = {};
            obj.name = key;
            obj.start = cumulative;
            obj.value = month_data.all_catagories[key].total;
            cumulative += month_data.all_catagories[key].total;
            obj.end = cumulative;

            waterfall_data.push(obj);
        }

        waterfall_data.push({
            name: 'Total',
            end: cumulative,
            start: 0,
            value: cumulative,
        });

        console.log("month data: ", month_data);
        return {
            Ymax: cumulative,
            data: waterfall_data
        };
    },

    prepareDataForBarChart(data, month, category) {
        const month_data = data.filter(a => a.month === month)[0];
        const category_data = month_data.all_catagories[category];

        let bar_chart_data = [];
        let Ymax = 0;
        for(let key in category_data.details) {
            let obj = {};
            obj.name = key;
            obj.value = category_data.details[key];
            Ymax = Math.max(Ymax, category_data.details[key]);
            bar_chart_data.push(obj);
        }

        return {
            Ymax: Ymax,
            data: bar_chart_data
        }
    }
};

export default spendingsDataHelper;