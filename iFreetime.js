#!name=爱阅三秒跳广告
#!desc="卡广告领奖励,请开启MITM或者HTTPS解密(更新日期:2023.02.26)"
[Rule]
# DOMAIN,v.gdt.qq.com,REJECT
DOMAIN,video-dsp.pddpic.com,REJECT
DOMAIN,adim.pinduoduo.com,REJECT
DOMAIN,images.pinduoduo.com,REJECT
DOMAIN-SUFFIX,bytedance.com,REJECT
DOMAIN-SUFFIX,pglstatp-toutiao.com,REJECT
DOMAIN-SUFFIX,app-measurement.com,REJECT
DOMAIN-SUFFIX,shenbabao.com,REJECT
DOMAIN-SUFFIX,umeng.com,REJECT
DOMAIN-SUFFIX,umengcloud.com,REJECT
DOMAIN-SUFFIX,bytescm.com,REJECT
DOMAIN-SUFFIX,ctobsnssdk.com,REJECT
DOMAIN-SUFFIX,snssdk.com,REJECT
URL-REGEX,^https?:\/\/.+\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/(stats|settings)\/,REJECT
URL-REGEX,^https?:\/\/.+\.pangolin-sdk-toutiao\.com\/union\/endcard\/.+\/\?.+,REJECT
URL-REGEX,^https?:\/\/.+\.pinduoduo\.com\/marketing_api\/.+\/.+\.(png|jpeg|jpg|mp4),REJECT
URL-REGEX,^https?:\/\/googleads\..+\.doubleclick\.net\/mads\/(gma|static\/mad\/sdk\/native).+,REJECT
URL-REGEX,^https?:\/\/.+\.googleadservices\.com\/pagead\/.+\?.+,REJECT
URL-REGEX,^https?:\/\/.+\.gdt.qq.com\/.+\.fcg\?.+,REJECT
URL-REGEX,^https?:\/\/.+\.ugdtimg\.com\/gdt\/0\/.+\.(png|jpeg|jpg|mp4),REJECT
URL-REGEX,^https?:\/\/.+\.ugdtimg\.com\/ads_svp_video__.+\.f.+\.(png|jpeg|jpg|mp4)\?.+,REJECT
[MITM]
hostname = %APPEND% *.gdt.qq.com,*.pinduoduo.com,video-dsp.pddpic.com,*.pglstatp-toutiao.com,*.pangolin-sdk-toutiao.com,*.doubleclick.net,*.googleadservices.com,*.ugdtimg.com
