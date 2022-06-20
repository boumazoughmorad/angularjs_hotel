 'use strict';

angular.module('addEvent', ['ngRoute'])


.controller('EventCtrl', ['$scope','$firebaseArray',function($scope,$firebaseArray) {
	
  // recuperation des doner de la table « pharmacies »
 var ref=firebase.database().ref('hotel');

 var hotels =$firebaseArray(ref);

 
 $scope.showEditForm=false;
 $scope.hotelForm=true; 
 $scope.hotels=hotels;
 

$scope.hotelFormulaire=function(){
$scope.hotelForm=false;
$scope.showEditForm=false;
$scope.resethotel();

}  

// la fonction permet d'afficher la formulair de modification 
$scope.edithotel=function(hotel){
$scope.showEditForm=true;
$scope.hotelForm=true; 

$scope.id=hotel.$id;

$scope.Address=hotel.Address;
 $scope.prix= hotel.prix;
 $scope.Nom=hotel.Nom;
 
 $scope.Type_de_hotel=hotel.Type_de_hotel;
 $scope.date_nb=hotel.date_nb;

 $scope.nember_champber=hotel.nember_champber;
 $scope.smoking=hotel.smoking;

}

// modification d'un client
$scope.updatehotel=function()
{

  var id=$scope.id;
  $scope.id=0;

var record=hotels.$getRecord(id);


record.Address=$scope.Address;
record.prix=$scope.prix;
 record.Nom=$scope.Nom;
 record.Type_de_hotel=$scope.Type_de_hotel;

 record.date_nb=$scope.date_nb;

 record.nember_champber=$scope.nember_champber;
 record.smoking=$scope.smoking;
hotels.$save(record);

$scope.resethotel();
 $scope.showEditForm=true;

}



// enregistrer les données dans un nouveau client dans firebase
$scope.savehotel=function(){

var data={
  id: hotels.length+1,
  prix: $scope.prix,
	Nom: $scope.Nom,
  Address: $scope.Address,
  Type_de_hotel:$scope.Type_de_hotel,
  date_nb:$scope.date_nb,
 
   nember_champber:$scope.nember_champber,
   smoking:$scope.smoking,
   

};

hotels.$add(data).then(function(ref){
  $scope.resethotel();
   $scope.hotelForm=true;
});

}

$scope.resethotel=function(){


  $scope.Address="";
  $scope.prix="";
  $scope.Nom="";
  $scope.Type_de_hotel="";
  $scope.date_nb="";
  
  $scope.nember_champber="";
  $scope.smoking="";
}
// supprimer une client
$scope.deletehotel= function(hotel)
{

hotels.$remove(hotel); 


}



$scope.closehotelForm=function(){

  $scope.hotelForm=true;
  $scope.showEditForm=false;
  $scope.resethotel();


}



$scope.clearFilter=function(){

$scope.searchBox.$="";
$scope.searchBox.nember_champber="";
$scope.searchBox.prix="";
$scope.searchBox.Nom="";
$scope.searchBox.Type_de_hotel="";


}



}]);