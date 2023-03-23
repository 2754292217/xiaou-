if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../uview-ui/components/u-icon/u-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-search/u-search?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-badge/u-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-tabs/u-tabs?hash=d82f086824acc2def70585fcaeead525511fdb67');
require('../../uview-ui/components/u-swiper/u-swiper?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-count-down/u-count-down?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-subsection/u-subsection?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-lazy-load/u-lazy-load?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-skeleton/u-skeleton?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/cartnull/cartnull?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-row-notice/u-row-notice?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-column-notice/u-column-notice?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-notice-bar/u-notice-bar?hash=8f91c22888361a143b67dacdd9d636dff3c912fb');
require('../../uview-ui/components/u-empty/u-empty?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-button/u-button?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-tabs-swiper/u-tabs-swiper?hash=d82f086824acc2def70585fcaeead525511fdb67');
require('../../components/ordernull/ordernull?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-line/u-line?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-loading/u-loading?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-loadmore/u-loadmore?hash=f0bfa7b8e8c93907510ed00ffcb8fc101b8b8930');
require('../../uview-ui/components/u-radio-group/u-radio-group?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-radio/u-radio?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../components/region/region-picker?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/region/w-picker?hash=e825e23106dd96524f74654b4cf592d660e70888');
require('../../uview-ui/components/u-line-progress/u-line-progress?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-upload/u-upload?hash=c9182effdba6369eafb9bd43b375d039f5423b3b');
require('../../uview-ui/components/u-mask/u-mask?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-popup/u-popup?hash=93778e59e9c142492cad72fd41ad6441b3624d39');
require('../../uview-ui/components/u-picker/u-picker?hash=3c9f7133bdf7d16fec3ef0aaab0556f4e1889c01');
require('../../uview-ui/components/u-waterfall/u-waterfall?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/sw-calendar/sw-calendar?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=6697e18eb5233c6ec1212726593c26fe1ce8f1db');
require('../../pages/cart/cart?hash=837912d357a0b87864b11b11159d264a9f12bf0a');
require('../../pages/user/user?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/cate/cate?hash=686d571b8c31899772edfca87e9c00cadcb29b1a');
require('../../pages/goodlist/goodlist?hash=e5b2c55ce451519c0e9ca7ab566807d6282c7aa8');
require('../../pages/gooddesc/gooddesc?hash=4d39663b0cf248c71bb71d9f056c28b2ea203769');
require('../../pages/order/order?hash=9f1f5dce1569f62f3f35de8b2fe5cb1ee12f74b3');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/textlogin/textlogin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/search/search?hash=686d571b8c31899772edfca87e9c00cadcb29b1a');
require('../../pages/orderlist/orderlist?hash=d4bf41960ec2fa43664364e8371acdf06a6e34a3');
require('../../pages/address/address?hash=cc575c72c24ad618d9e5d0de0dd7692a68bbc568');
require('../../pages/address/addSite?hash=7cd5cbb261cc0ee3f3b62fdd574a32f8ae57393d');
require('../../pages/pay/pay?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/userinfo/userinfo?hash=18c4536767854898338d872dfbeab75488905cd8');
require('../../pages/active/active?hash=4f7d3b47c483422fc1dfafc002b98f93d4c2f6a8');
require('../../pages/ceshi/ceshi?hash=fce2c0cec96af1d3e880d34b20df1567736275d2');
require('../../pages/sign/sign?hash=df17b5ee424a8e03caedc1d4c7198acf6581ec55');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}