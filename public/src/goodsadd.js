
define(['jquery', 'template', './utils'], function ($, template) {
  $('form').on('submit', function () {
    var _this = $(this);
    console.log(_this);
    
    $.ajax({
      url: '/api/product/addProduct',
      type: 'post',
      data: _this.serialize(),
      success: function (info) {
        console.log(info);
        // location.href = '/goods_list.php';
      }

    })

    
    return false;
    
  })
  

  //使用uploadify上传图片；

  //品牌列表
  $.ajax({
    url: '/api/category/querySecondCategoryPaging',
    type: 'get',
    data: {page: 1, pageSize: 100},
    success: function (info) {
      console.log(info);
      var html = template('brands', info);
      $('.brand').append(html);
    }

  })
  


})