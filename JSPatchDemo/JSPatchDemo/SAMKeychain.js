
require('UITableView,UIColor')

//----------------------------------------SAMKeychainClass----------------------------------------------
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
