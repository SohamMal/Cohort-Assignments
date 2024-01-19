/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/
function calculateTotalSpentByCategory(transactions) {
  let ans_obj_arr=[];
  for(let i=0; i<transactions.length; i++){
    let catg=transactions[i].category;
    let price=transactions[i].price;
    let flag=0;
    for(let j=0; j<ans_obj_arr.length; j++){
      if(ans_obj_arr[j].category===catg){
        ans_obj_arr[j].totalSpent=ans_obj_arr[j].totalSpent+price;
        flag=1;
        break;
      }
    }
    if(flag!==1){
      let obj={
        category:catg,
        totalSpent:price
      };
      ans_obj_arr.push(obj);
    }
    flag=0;
  }
  return ans_obj_arr;
}

module.exports = calculateTotalSpentByCategory;
