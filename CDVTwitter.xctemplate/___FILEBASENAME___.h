//
//  ___FILEBASENAME___.h
//
//  CDVTwitter
//
//  Original work by Antonelli Brian on 10/13/11.
//
//
//  ___FILEBASENAME___
//  CDVEmailComposer Template Created Jan 7 2013
//  Copyright 2013 @RandyMcMillan

#import <Foundation/Foundation.h>
#import <Twitter/Twitter.h>
#import <Accounts/Accounts.h>
#import <Cordova/CDVPlugin.h>

@interface ___FILEBASENAME___ : CDVPlugin {}

- (void)isTwitterAvailable:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)isTwitterSetup:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)composeTweet:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)getPublicTimeline:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)getTwitterUsername:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)getMentions:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)getTWRequest:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options;

- (void)performCallbackOnMainThreadforJS:(NSString *)js;

@end
