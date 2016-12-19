//
//  User+CoreDataProperties.m
//  
//
//  Created by marco chen on 2016/12/19.
//
//  This file was automatically generated and should not be edited.
//

#import "User+CoreDataProperties.h"

@implementation User (CoreDataProperties)

+ (NSFetchRequest<User *> *)fetchRequest {
	return [[NSFetchRequest alloc] initWithEntityName:@"User"];
}

@dynamic userid;
@dynamic username;

@end
