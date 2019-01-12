const incomeBox = document.getElementById('income');

// ----------------
// const inc1 = document.querySelector('lower-container');
// const firstItem = inc1.firstChild;
// const secondItem = firstItem.firstChild;
// const secondChild = secondItem.nextSibling;
//--------------------------


const expenseBox = document.getElementById('expense');
const contaniner1 = document.getElementById('lower-container');
var sumAll = 0;

document.addEventListener('keypress', function(event){
		
    if(event.keyCode === 13) {

        button();
    };
    });

function button(){
    var selectType = document.getElementById('select-type').value;
    var desc = document.getElementById('desc-item').value;
    var itemValue = document.getElementById('item-value').value;
    var deleteBtn = document.createElement('button');

    function createDelBtn(){
            // creating a delete button
            deleteBtn.className = 'btn btn-danger';
            deleteBtn.appendChild(document.createTextNode('X'));
            newLi.appendChild(deleteBtn);
            newLi.appendChild(newValueBox);
    }


    if(selectType=='inc'){
        var newLi = document.createElement('div');
        newLi.className= 'income-list income-line';
        var newValueBox = document.createElement('div');
        newValueBox.className = 'value-box-income';
        newValueBox.id = ('newLine');
        newLi.appendChild(document.createTextNode(desc + ' '));
        newValueBox.appendChild(document.createTextNode(itemValue +''));

        // creating a delete button
        createDelBtn();
        deleteBtn.id = 'btn-delete-line-inc';
        incomeBox.appendChild(newLi);

        // sum all positive numbers 
        var sum = document.getElementById('sum-all');
        var itemValueInt = parseInt(itemValue);
        sumAll = sumAll + itemValueInt;
        sum.innerHTML = sumAll;
    }
    else{
        var newLi = document.createElement('div');
        newLi.className= 'expense-list expense-line';
        var newValueBox = document.createElement('div');
        newValueBox.className = 'value-box-expense';
        newValueBox.id = ('newLine');
        newLi.appendChild(document.createTextNode(desc + ' '));
        newValueBox.appendChild(document.createTextNode('-'+ itemValue +''));
        
        //del btn
        createDelBtn();
        deleteBtn.id = 'btn-delete-line-exp';
        expenseBox.appendChild(newLi);

        //substract negative numbers
        var sum = document.getElementById('sum-all');
        var itemValueInt = parseInt(itemValue);
        sumAll = sumAll - itemValueInt;
        sum.innerHTML = sumAll;
        }

        document.getElementById('desc-item').value= '';
        document.getElementById('item-value').value= '';
        document.getElementById('desc-item').focus();

}

// Delete item from list
incomeBox.addEventListener('click', removeItem);
expenseBox.addEventListener('click', removeItem);

function removeItem(e){

    if(e.target.classList.contains('btn-danger')){
        var curValue = e.target.nextElementSibling.textContent;
        // --------
        var sum = document.getElementById('sum-all');
        var itemValueInt = parseInt(curValue);
        sumAll = sumAll - itemValueInt;
        sum.innerHTML = sumAll;
        // ---------
        var li = e.target.parentElement;
        if(e.target.id === 'btn-delete-line-inc'){
        incomeBox.removeChild(li);
        }
        else if(e.target.id === 'btn-delete-line-exp'){
            expenseBox.removeChild(li);
            }
    }
}


// End 'Delete Item'



