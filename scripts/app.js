(
  function(){
    'use strict';
    var app = angular.module('ShoppingListCheckOff',[]);
    app.controller('ToBuyController',ToBuyController);
    app.controller('AlreadyBoughtController',AlreadyBoughtController);
    app.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService){
      var tobuyCtrl = this;

      tobuyCtrl.markAsBought = function(index){
        ShoppingListCheckOffService.markAsBought(index);
      };
      tobuyCtrl.getToBuyItems = function(){
        return ShoppingListCheckOffService.getToBuyItems();
      };
      tobuyCtrl.isToBuyEmpty = function(){
        return ShoppingListCheckOffService.isToBuyEmpty();
      }

    }

    function AlreadyBoughtController(ShoppingListCheckOffService){
      var boughtCtrl = this;
      boughtCtrl.getBoughtItems =  function(){
        return ShoppingListCheckOffService.getBoughtItems();
      };

      boughtCtrl.isBoughtEmpty = function(){
        return ShoppingListCheckOffService.isBoughtEmpty();
      }

    }

    function ShoppingListCheckOffService(){
      var service = this;
      service.toBuyItems = [
        {
          name:'carrots',
          quantity: 5
        },{
          name:'cabbage',
          quantity: 1
        },{
          name:'apples',
          quantity: 10
        },{
          name:'pears',
          quantity: 3
        },{
          name:'pineapple',
          quantity: 1
        }
      ];
      service.boughtItems = [];
      service.getToBuyItems = function(){
        return service.toBuyItems;
      };
      service.markAsBought = function (idx) {
        var item;
        item = service.toBuyItems.splice(idx,1);
        service.boughtItems.push(item[0]);

      };
      service.getBoughtItems = function(){
        return service.boughtItems;
      };
      service.isToBuyEmpty = function(){
        return service.toBuyItems.length==0?true:false;
      }

      service.isBoughtEmpty = function(){
        return service.boughtItems.length==0?true:false;
      }

    }

  }
)();
