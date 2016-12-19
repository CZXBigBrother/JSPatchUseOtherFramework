# JSPatchUseOtherFramework
JSPatch Use Other Framework Demo
##JSPatch 调用第三方库教程.写看新使用的朋友们当案例看看,随便给自己练练手
现在已经写了这些Demo AFNetworking MBProgressHUD SDWebImage MJRefresh SAMKeychain Masonry MJExtension
文档正在编写中.......(先补上粗略的文档,详细文档稍后补上)
###AFNetworking使用
```
defineClass('AFNClass: UIViewController', {
  viewDidLoad: function() {
    require('AFHTTPSessionManager,AFNetworking,NSProgress,NSURLSessionDataTask,NSError,AFHTTPResponseSerializer,NSString')
    self.ORIGviewDidLoad();
    self.setTitle("AFNClass")
    self.view().setBackgroundColor(UIColor.grayColor())
   var mgr = AFHTTPSessionManager.manager();
   mgr.setResponseSerializer(AFHTTPResponseSerializer.serializer());
   mgr.GET_parameters_progress_success_failure("https://www.baidu.com", null, block('NSProgress*', function(downloadProgress) {}), block("NSURLSessionDataTask*, id", function(task, responseObject) {
       console.log("success = %@", NSString.alloc().initWithData_encoding(responseObject,4));
   }), block("NSURLSessionDataTask*, NSError*", function(task, error) {
       console.log("failure = %@", error);
   }));
  },
})
```
###MBProgressHUD使用
```
defineClass('MBPClass:UIViewController',{
  viewDidLoad: function() {
    self.ORIGviewDidLoad();
    self.setTitle("MBPClass")
    self.view().setBackgroundColor(UIColor.grayColor())

    require('MBProgressHUD')
    MBProgressHUD.showHUDAddedTo_animated(self.view(),YES)
  },
})
```
###SDWebImage使用 
```
defineClass('SDWebClass:UIViewController',{
  viewDidLoad: function() {
    require('UIImageView,NSURL')
    self.ORIGviewDidLoad();
    self.setTitle("SDWebClass")
    self.view().setBackgroundColor(UIColor.grayColor())
    var imgBackground = UIImageView.alloc().initWithFrame(self.view().frame())
    self.view().addSubview(imgBackground)
    imgBackground.sd__setImageWithURL(NSURL.URLWithString("https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"))
  },
})
```
###MJRefresh使用 
```
defineClass('MJRefreshClass:UIViewController<UITableViewDelegate,UITableViewDataSource>',['myTableView'],{
  viewDidLoad: function() {
    self.ORIGviewDidLoad();
    require('MJRefreshNormalHeader,MJRefreshBackNormalFooter,MJRefresh')
    self.setTitle("MJRefreshClass")
    self.view().setBackgroundColor(UIColor.grayColor())
    var tableView = UITableView.alloc().initWithFrame_style(self.view().frame(),0)
    tableView.setDelegate(self)
    tableView.setDataSource(self)
    self.view().addSubview(tableView)
    tableView.setMj__header(MJRefreshNormalHeader.headerWithRefreshingTarget_refreshingAction(self,"startFresh"))
    tableView.setMj__footer(MJRefreshBackNormalFooter.footerWithRefreshingTarget_refreshingAction(self,"footFreshL"))
    self.setMyTableView(tableView)
  },
  numberOfSectionsInTableView: function(tableView) {
    return 1;
  },
  tableView_numberOfRowsInSection: function(tableView, section) {
    return 20;
  },
  tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
    var cell = tableView.dequeueReusableCellWithIdentifier("cell") 
    if (!cell) {
      cell = require('UITableViewCell').alloc().initWithStyle_reuseIdentifier(0, "cell")
    }
    cell.textLabel().setText('123')
    return cell
  },
  tableView_heightForRowAtIndexPath: function(tableView, indexPath) {
    return 44
  },
  startFresh:function() {
    console.log("start")
    var weakSelf = __weak(self)
    dispatch_after(1.0, function(){
        weakSelf.myTableView().mj__header().endRefreshing();
    })
  },
  footFreshL:function() {
    console.log("foot")
    var weakSelf = __weak(self)
    dispatch_after(1.0, function(){
        weakSelf.myTableView().mj__footer().endRefreshing();
    })
  },
})
```
###SAMKeychain使用 
```
defineClass('SAMKeychainClass:UIViewController',{
  viewDidLoad: function() {
    require('SAMKeychain')
    self.ORIGviewDidLoad();
    self.setTitle("SAMKeychainClass")
    self.view().setBackgroundColor(UIColor.grayColor())
    SAMKeychain.setPassword_forService_account("password","service","account")
    console.log(SAMKeychain.allAccounts())
    console.log(SAMKeychain.passwordForService_account("service","account"))
  },
})
```
###Masonry使用 
```
defineClass('MasonryClass:UIViewController',{
  viewDidLoad: function() {
    require('UIView,MASConstraint,MASConstraintMaker')
    self.ORIGviewDidLoad();
    self.setTitle("MasonryClass")
    self.view().setBackgroundColor(UIColor.grayColor())
    var testView = UIView.alloc().init()
    self.view().addSubview(testView)
    testView.setBackgroundColor(UIColor.redColor())
    testView.mas__makeConstraints(block("MASConstraintMaker*",function(make){
      make.top().equalTo()(self.view())
      make.right().equalTo()(self.view())
      make.left().equalTo()(self.view())
      make.bottom().equalTo()(self.view())
    }))
    var testView2 = UIView.alloc().init();
    self.view().addSubview(testView2);
    testView2.setBackgroundColor(UIColor.greenColor())
    testView2.mas__makeConstraints(block("MASConstraintMaker*",function(make){
      make.top().equalTo()(testView.mas__topMargin()).offset()(100)
      make.right().equalTo()(testView.mas__rightMargin());
      make.left().equalTo()(testView.mas__leftMargin());
      make.height().equalTo()(50)
    }))
  },
})
```
###MJExtension使用
```
defineClass('testModel:NSObject',['key1','key2'],{

})
defineClass('MJExtensionClass:UIViewController',{
  viewDidLoad: function() {
    self.ORIGviewDidLoad();
    self.setTitle("MJExtensionClass")
    self.view().setBackgroundColor(UIColor.grayColor())
    require('testModel')
    var test = {
      "key1": "value1",
      "key2": "values"
    };
    var model = testModel.mj__objectWithKeyValues(test)
    console.log(model.key1())
    console.log(model.key2())
  },
})
```
