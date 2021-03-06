/**
 * Created by lexy on 2014.03.31..
 */
 var ExampleData = {};
 
 ExampleData.tableData = {
    name: 'xsquared_example',
    points: [
        { x: 0, y: [0, 0, 2, 0]},
        { x: 1, y: [1, 2, 2, 0]},
        { x: 2, y: [4, 4, 2, 0]},
        { x: 3, y: [9, 6, 2, 0]},
        { x: 4, y: [16, 8, 2, 0]},
        { x: 5, y: [25, 10, 2, 0]},
        { x: 6, y: [36, 12, 2, 0]}
    ],
    max_derivate: 3,
    num_of_points: 7,
    num_of_rows : 5,
    num_of_cols : 8,
    type_of_interpolation: '',
    inverze: false
};

ExampleData.plotSetting = {
    xaxis_min: "-1",
    xaxis_max: "9",
    yaxis_min: "-1",
    yaxis_max: "36",
    derivNum_max: ""
};

ExampleData.senderOneData = {
	tableData : ExampleData.tableData,
	plotSetting: ExampleData.plotSetting
};

ExampleData.receiverOneData = {
    name: 'xsquared_example',
    polynomial: [0,0,1]
};

ExampleData.senderData = {
    data_set: [{
        sender: ExampleData.tableData
    }],
    num_of_systems: 1
};

ExampleData.receiverData = {
    data_set: [{
        sender: ExampleData.tableData,
        receiver: ExampleData.receiverOneData
    }],
    num_of_systems: 1
};
 
function example_datas(){
    var _this = {};
    //-----------------------------------example_sincos
    _this.example_sincos = [];
    var i;

    var sin = [],
        cos = [];
    for (i = 0; i < 14; i += 0.5) {
        sin.push([i, Math.sin(i)]);
        cos.push([i, Math.cos(i)]);
    }
    _this.example_sincos.push(sin);
    _this.example_sincos.push(cos);

    //-----------------------------------example_datas_some, example_datas
    var d1 = [];
    for (i = 0; i < 14; i += 0.5) {
        d1.push([i, Math.sin(i)]);
    }

    var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];

    var d3 = [];
    for (i = 0; i < 14; i += 0.5) {
        d3.push([i, Math.cos(i)]);
    }

    var d4 = [];
    for (i = 0; i < 14; i += 0.1) {
        d4.push([i, Math.sqrt(i * 10)]);
    }

    var d5 = [];
    for (i = 0; i < 14; i += 0.5) {
        d5.push([i, Math.sqrt(i)]);
    }

    var d6 = [];
    for (i = 0; i < 14; i += 0.5 + Math.random()) {
        d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);
    }



    _this.example_datas_some = [{
        data: d4,
        lines: { show: true }
    }, {
        data: d3,
        points: { show: true }
    }];

    _this.example_datas = [{
        data: d1,
        lines: { show: true, fill: true }
    }, {
        data: d2,
        bars: { show: true }
    }, {
        data: d3,
        points: { show: true }
    }, {
        data: d4,
        lines: { show: true }
    }, {
        data: d5,
        lines: { show: true },
        points: { show: true }
    }, {
        data: d6,
        lines: { show: true, steps: true }
    }];

    //-------------------------------example_prepare(interpolation_data)

    var data1 = {
        name: 'data1',
        points: [
            { x: 0, y: [0]},
            { x: 1, y: [1]},
            { x: 3, y: [3]}
        ],
        deriv_num: 0,
        type: 'L',//L,N,H
        inverse: false
    };

    var data2 = {
        name: 'data2',
        points: [
            { x: 0, y: [0]},
            { x: 1, y: [1]},
            { x: 3, y: [9]}
        ],
        derivative_num: 0,
        type: 'L',
        inverse: false
    };

    _this.proj_data = []; // = [data1,data2];
    _this.proj_data.push(data1);
    _this.proj_data.push(data2);

    //-------------------------------example_result(interpolation_data)

    var res_data1 = {
        name: 'data1',
        points: [
            { x: 0, y: [0]},
            { x: 1, y: [1]},
            { x: 3, y: [3]}
        ],
        deriv_num: 0,
        type: 'L',
        inverse: false,
        succ: true,
        polinome: [0,1]
    };

    var res_data2 = {
        name: 'data2',
        points: [
            { x: 0, y: [0]},
            { x: 1, y: [1]},
            { x: 3, y: [9]}
        ],
        deriv_num: 0,
        type: 'L',
        inverse: false,
        succ: true,
        polinome: [0,0,1]
    };

    _this.proj_res_data = []; // = [data1,data2];
    _this.proj_res_data.push(res_data1);
    _this.proj_res_data.push(res_data2);

    /*
    push_result_data('data1', true, [0,1]);
    push_result_data('data2', true, [0,0,1]);
    var result_data = [];
    result_data.push(data1);
    result_data.push(data2);
    this.interpolation_data = interpolation_data;
    JSON.stringify(result_data,null,2);
    */

    _this.polinomesObject3 = [{
        label: 'data[0,0,0,1,1]',
        polinome: [
            -(2.897877494*10-9), //0
            +(22.02671519), //1
            -(16.74055236), //2
            +(4.084731951), //3
            -(3.827339558*10-1), //4
            (1.183918774*10-2)
        ]
    }];
    /*
     (1.183918774·10-2) *x^5
     -(3.827339558·10-1)*x^4
     +(4.084731951)*x^3
     -(16.74055236)*x^2
     +(22.02671519)*x
     -(2.897877494·10-9)
     * */


    var one = 0.1;
    _this.polinomesObject1 = [{
        label: 'data[0,0,1]',
        polinome: [0,0,1]
    },{
        label: 'data[0,0,0.5]',
        polinome: [0,0,0.5]
    }];

    _this.polinomesObject2 = [{
        label: 'data1',
        polinome: [0,6]
    },{
        label: 'data2',
        polinome: [0,0,2]
    },{
        label: 'data3',
        polinome: [0,0,0,2*one]
    },{
        label: 'data4',
        polinome: [0,0,0,5*one]
    }];

    return _this;
};