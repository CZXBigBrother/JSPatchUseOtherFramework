
require('UITableView,UIColor')

//----------------------------------------AFNClass----------------------------------------------
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
