//
//  User+CoreDataProperties.h
//  
//
//  Created by marco chen on 2016/12/19.
//
//  This file was automatically generated and should not be edited.
//

#import "User+CoreDataClass.h"


NS_ASSUME_NONNULL_BEGIN

@interface User (CoreDataProperties)

+ (NSFetchRequest<User *> *)fetchRequest;

@property (nonatomic) int64_t userid;
@property (nullable, nonatomic, copy) NSString *username;

@end

NS_ASSUME_NONNULL_END
