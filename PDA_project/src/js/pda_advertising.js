/**
 * Created by ds on 2017/8/29.
 */
'use strict';

require('../css/pda_advertising.css');
import React from 'react';
import ReactDOM from 'react-dom';
import qr from 'qr-image';
import svgpath from  'svgpath';
module.exports = function () {
    const data =
    {
        selectIndex: 0,
        subItem: {},
        //子女
        childrenSecurity: {
            title: '· 选择子女保险，给予孩子成长更多的关爱 ·',
            content: [
                {
                    id: 1,
                    posterImageUrl: 'images/children/children1.png',
                    title: '淘气宝-监护人责任保险',
                    description: '家有熊孩子没烦恼，他人损失帮您保',
                    price: '40',
                    productUrl: 'http://m.hangjia.com/nproduct/detail44.page?source_id=125'
                },
                {
                    id: 2,
                    posterImageUrl: 'images/children/children2.png',
                    title: '乐享人生幼儿',
                    description: '60天-6岁幼儿，全方位保障',
                    price: '230',
                    productUrl: 'http://m.hangjia.com/nproduct/detail391.page?source_id=125'
                },
                {
                    id: 3,
                    posterImageUrl: 'images/children/children3.png',
                    title: '乐享人生少儿',
                    description: '7-17岁少儿， 重疾意外全面防护',
                    price: '190',
                    productUrl: 'http://m.hangjia.com/nproduct/detail178.page?source_id=125'
                },
                {
                    id: 4,
                    posterImageUrl: 'images/children/children4.png',
                    title: '住院保',
                    description: '疾病+意外全面保障，补充社保不足',
                    price: '180',
                    productUrl: 'http://m.hangjia.com/nproduct/detail518.page?source_id=125'
                },
                {
                    id: 5,
                    posterImageUrl: 'images/children/children5.png',
                    title: '抗癌卫士',
                    description: '赔了还能买，买了还能赔',
                    price: '130',
                    productUrl: 'http://m.hangjia.com/nproduct/detail527.page?source_id=125'
                },
                {
                    id: 6,
                    posterImageUrl: 'images/children/children6.png',
                    title: '百万保额意外险',
                    description: '高额意外伤害保障，满足高端人士之需',
                    price: '1000',
                    productUrl: 'http://m.hangjia.com/nproduct/detail250.page?source_id=125'
                },
                {
                    id: 7,
                    posterImageUrl: 'images/children/children7.png',
                    title: 'MSH-海外专项就医保险',
                    description: '1200万保障，境外就医报销',
                    price: '2519',
                    productUrl: 'http://m.hangjia.com/nproduct/detail442.page?source_id=125'
                },
            ],
        },

        //父母
        parentsSecurity: {
            title: '· 选择父母保险，帮您无时无刻陪在父母身边 ·',
            content: [

                {
                    id: 1,
                    posterImageUrl: 'images/parent/parent1.png',
                    title: '老年意外骨折险',
                    description: '专为60-80岁老人设计，骨折3万保障',
                    price: '99',
                    productUrl: 'http://m.hangjia.com/nproduct/detail337.page?source_id=125'
                },
                {
                    id: 2,
                    posterImageUrl: 'images/parent/parent2.png',
                    title: '太平退糖鼓糖尿病保险',
                    description: '每天仅需1-3元，最高赔付达15万元',
                    price: '187',
                    productUrl: 'http://m.hangjia.com/nproduct/detail381.page?source_id=125'
                },
                {
                    id: 3,
                    posterImageUrl: 'images/children/children7.png',
                    title: 'MSH-海外专项就医疗保险',
                    description: '1200万保障，境外就医报销',
                    price: '2519',
                    productUrl: 'http://m.hangjia.com/nproduct/detail442.page?source_id=125'
                },
                {
                    id: 4,
                    posterImageUrl: 'images/children/children4.png',
                    title: '住院保',
                    description: '疾病+意外全面保障，补充社保不足',
                    price: '180',
                    productUrl: 'http://m.hangjia.com/nproduct/detail518.page?source_id=125'
                },
                {
                    id: 5,
                    posterImageUrl: 'images/children/children5.png',
                    title: '抗癌卫士',
                    description: '赔了还能买，买了还能赔',
                    price: '130',
                    productUrl: 'http://m.hangjia.com/nproduct/detail527.page?source_id=125'
                },
                {
                    id: 6,
                    posterImageUrl: 'images/children/children6.png',
                    title: '百万保额意外险',
                    description: '高额意外伤害保障，满足高端人士之需',
                    price: '1000',
                    productUrl: 'http://m.hangjia.com/nproduct/detail250.page?source_id=125'
                },

            ],
        },

        //伴侣
        partnerSecurity: {
            title: '· 选择伴侣保险，给身边的人一份永恒的承诺 ·',
            content: [
                {
                    id: 1,
                    posterImageUrl: 'images/company/company1.png',
                    title: '爱家庭-白领健康保障',
                    description: '30种重疾、日常意外、意外医疗等多重保障',
                    price: '380',
                    productUrl: 'http://m.hangjia.com/nproduct/detail183.page?source_id=125'
                },
                {
                    id: 2,
                    posterImageUrl: 'images/company/company2.png',
                    title: '爱家庭-女性健康保障计划',
                    description: '保障女性特定疾病，更有面部整容意外保障',
                    price: '300',
                    productUrl: 'http://m.hangjia.com/nproduct/detail186.page?source_id=125'
                },
                {
                    id: 3,
                    posterImageUrl: 'images/children/children6.png',
                    title: '百万保额意外险',
                    description: '高额意外伤害保障， 满足高端人士之需',
                    price: '1000',
                    productUrl: 'http://m.hangjia.com/nproduct/detail250.page?source_id=125'
                },
                {
                    id: 4,
                    posterImageUrl: 'images/company/company4.png',
                    title: '低风险（1、2类）职业意外保险',
                    description: '保障全面保额高，计划可选真方便',
                    price: '178',
                    productUrl: 'http://m.hangjia.com/nproduct/detail83.page?source_id=125'
                },
                {
                    id: 5,
                    posterImageUrl: 'images/company/company5.png',
                    title: '中风险（3、4类）职业意外保险',
                    description: '保障全面保额高，计划可选真方便',
                    price: '221',
                    productUrl: 'http://m.hangjia.com/nproduct/detail107.page?source_id=125'
                },
                {
                    id: 6,
                    posterImageUrl: 'images/company/company6.png',
                    title: '高风险（5、6类）职业意外保险',
                    description: '保障全面保额高，计划可选真方便',
                    price: '263',
                    productUrl: 'http://m.hangjia.com/nproduct/detail110.page?source_id=125'
                },
                {
                    id: 7,
                    posterImageUrl: 'images/company/company7.png',
                    title: '住院保',
                    description: '疾病+意外全面保障，补充社保不足',
                    price: '180',
                    productUrl: 'http://m.hangjia.com/nproduct/detail518.page?source_id=125'
                },
                {
                    id: 8,
                    posterImageUrl: 'images/company/company8.png',
                    title: '抗癌卫士',
                    description: '赔了还能买，买了还能赔',
                    price: '130',
                    productUrl: 'http://m.hangjia.com/nproduct/detail527.page?source_id=125'
                },
                {
                    id: 9,
                    posterImageUrl: 'images/children/children7.png',
                    title: 'MSH-海外专项就医疗保险',
                    description: '1200万保障，境外就医报销',
                    price: '2519',
                    productUrl: 'http://m.hangjia.com/nproduct/detail442.page?source_id=125'
                },
            ]
        }

    };

    function AppRender() {
        data.subItem = data.childrenSecurity.content[0];//初始化值
        function App() {
            return (
                <div>
                    <Header />
                    <Body_content data={data}/>
                    <FootView />
                </div>
            );
        };
        function Header() {

            function itemClick(index) {
                data.selectIndex = index;
                render();
            }

            return (
                <div className="header">
                    <div className="container">
                        <div className="logo"></div>
                        <div className={data.selectIndex == 0 ? 'header_title selected_title' : 'header_title'}
                             id="children" onClick={itemClick.bind(this, 0)}>子女保障
                        </div>
                        <div className={data.selectIndex == 1 ? 'header_title selected_title' : 'header_title'}
                             classID="company" onClick={itemClick.bind(this, 1)}>伴侣保障
                        </div>
                        <div className={data.selectIndex == 2 ? 'header_title selected_title' : 'header_title'}
                             classID="parent" onClick={itemClick.bind(this, 2)}>父母保障
                        </div>
                    </div>
                </div>
            );
        }


        function Body_content(items) {
            var data = items.data;
            const index = data.selectIndex;
            var item = {};
            if (index == 0) {
                item = data.childrenSecurity;
            } else if (index == 1) {
                item = data.partnerSecurity;
            } else if (index == 2) {
                item = data.parentsSecurity;
            }
            function productItemClick(index) {
                console.log(data);

                data.subItem = item.content[index];
                console.log(data.subItem);
                render();

            }

            const lists = item.content.map((obj, index)=>
                <div className="product_box" data-toggle="modal" data-target=".children_modal"
                     onClick={productItemClick.bind(this, index)} key={obj.id}>
                    <img className="product_img" src={obj.posterImageUrl}/>

                    <div className="text_box">
                        <h4>{obj.title}</h4>
                        <p className="detail_p">{obj.description}</p>
                        <div className="detail_box"><span className="orange_text">{obj.price}</span>元起
                            <button className="btn detail_button">查看与投保</button>
                        </div>
                    </div>
                    <input value={obj.productUrl}
                           className="hidden"/>
                </div>
            );
            return (
                // 模态
                <div className="content">
                    <div className="container">

                        <ModalView subItem={data.subItem}/>
                        <div className="box_1">
                            <div className="gray_big">{item.title}</div>
                            <div className="content-box">
                                {lists}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        function FootView() {
            function submitData() {
                var myPhone = $('.my-phone-input').val();
                if (myPhone != '') {
                    var myreg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/;
                    if (myreg.test(myPhone)) {
                        $.post('http://www.xgnins.com/InsuranceProduct_web/group/subscribe.do', {
                            sendMail: false,
                            customerPhone: myPhone,
                            customerName: 'PDA'
                        }, function (result) {
                            if (result == 1) {
                                $('#myModal').modal('show');//显示模态框
                                $('.error-info').text('');
                                console.log('ok');
                            } else {
                                $('.error-info').text('提交出错,请稍后再试');
                                console.log('error');
                            }
                        });
                    }else{
                        $('.error-info').text('手机号格式不对');
                    }
                } else {
                    $('.error-info').text('手机号不能为空');
                }
            }

            return (
                <div>
                    <div className="public_content">
                        <div className="container">
                            <div className="features_box">
                                <div className="features_1 features">资深保险经纪人</div>
                                <div className="features_2 features feature_margin">1V1专属服务</div>
                                <div className="features_3 features feature_margin">专家解读产品</div>
                            </div>
                            <div className="process">
                                <table>
                                    <tr >
                                        <td width="200">
                                            <div className="process_1 process_img"></div>
                                        </td>
                                        <td width="60">
                                            <div className="line"></div>
                                        </td>
                                        <td width="200">
                                            <div className="process_2 process_img"></div>
                                        </td>
                                        <td width="60">
                                            <div className="line"></div>
                                        </td>
                                        <td width="200">
                                            <div className="process_3 process_img"></div>
                                        </td>
                                        <td width="60">
                                            <div className="line"></div>
                                        </td>
                                        <td width="200">
                                            <div className="process_4 process_img"></div>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td width="200">预留电话，申请服务</td>
                                        <td width="60"></td>
                                        <td width="200">专业顾问及时回电</td>
                                        <td width="60"></td>
                                        <td width="200">解读产品，定制全面保障</td>
                                        <td width="60"></td>
                                        <td width="200">预约面谈，更详细讲解</td>
                                    </tr>
                                </table>
                            </div>
                            <p style={{fontSize: 18 + 'px', marginBottom: 50 + 'px'}}>产品咨询与保障方案定制</p>

                            <input className="phone my-phone-input" placeholder="请输入您的手机号码"/>
                            <span className="error-info alter_text"></span><br/>
                            <button className="submit_button" data-toggle="modal" onClick={submitData.bind(this)}>
                                提交专属服务申请
                            </button>

                            <MakeModalView />
                            <p className="reservation">免费预约，2小时内保险专家到您身边</p>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container footer_p">· 保险不能改变生活，但能防止生活被改变 ·</div>
                    </div>
                </div>
            );
        }

        //模态视图
        function ModalView(item) {
            var path = item.subItem.productUrl;
            console.log('=====' + path);
            const originPath = qr.svgObject(path).path;
            const scaledPath = svgpath(originPath).scale(9, 8).toString();

            return (
                <div className="modal fade children_modal " tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal_box_1" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <svg className="code_size" style={{height: 274 + 'px'}} id="modal_code">
                                        <path style={{width: 300 + 'px'}} d={scaledPath}/>
                                    </svg>
                                    <h3 className="green_text">微信【扫一扫】了解详情</h3>
                                    <h4 classID="product_name">{item.subItem.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        //弹框
        function MakeModalView() {
            return (
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true">
                    <div className="modal-dialog modal_box_2" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal"
                                        aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <div className="order_img"></div>
                                    <h3 className="blue_text">提交成功</h3>
                                    <h4>稍后会有专人与您联系</h4>
                                    <button className="order_button" data-dismiss="modal">确定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        function render() {
            ReactDOM.render(<App />, document.getElementById('app'));
        }

        render();
    };
    AppRender();

};
// $(function () {
//     $(".header_title").click(function () {//TAB切换
//         var that = $(this);
//         if (!that.hasClass("selected_title")) {
//             that.addClass("selected_title").siblings().removeClass("selected_title");
//         }
//     });
//     var load = function () {//默认显示第一个
//         $(".box_1").show().siblings().hide();
//     };
//     window.onload = function () {
//         load();
//     };
//     $("#children").click(function () {//显示第一个
//         load();
//     });
//     $("#company").click(function () {//
//         $(".box_2").show().siblings().hide();
//     });
//     $("#parent").click(function () {//
//         $(".box_3").show().siblings().hide();
//     });
//     $(".product_box").click(function () {//二维码弹出
//         var code = $(this).find("input").val();
//         if ($('#modal_code:has(canvas)').length != 0) {
//             $("#modal_code>canvas").remove();
//         }
//         $('#modal_code').qrcode(code);
//         var name = $(this).find(".text_box h4").text();
//         $('#product_name').html(name);
//     });
//     $('.submit_button').on('click', function () {
//         // $('#myModal').modal('show');//显示模态框
//         var myPhone = $('.my-phone-input').val();
//         if (myPhone != '') {
//             var myreg = /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/;
//             if (myreg.test(myPhone)) {
//                 $.post('http://www.xgnins.com/InsuranceProduct_web/group/subscribe.do', {
//                     sendMail: false,
//                     customerPhone: myPhone,
//                     customerName: 'PDA'
//                 }, function (result) {
//                     if (result == 1) {
//                         $('#myModal').modal('show');//显示模态框
//                         $('.error-info').text('');
//                         console.log('ok');
//                     } else {
//                         $('.error-info').text('提交出错,请稍后再试');
//                         console.log('error');
//                     }
//                 });
//             }else{
//                 $('.error-info').text('手机号格式不对');
//             }
//
//         } else {
//             $('.error-info').text('手机号不能为空');
//         }
//     });
// });

