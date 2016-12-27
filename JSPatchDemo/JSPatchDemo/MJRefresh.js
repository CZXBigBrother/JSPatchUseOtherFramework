
require('UITableView,UIColor')
//----------------------------------------MJRefreshClass----------------------------------------------
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
