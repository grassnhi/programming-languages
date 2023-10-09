#include <iostream> 
#include <fstream> 
#include <iomanip>
#include <string>
#include <cstdlib>

using namespace std;

enum class RequestType{
    ZERO_BALANCE = 1, 
    CREDIT_BALANCE, //2
    DEBIT_BALANCE, //3
    END //4
};

RequestType getRequest();
bool shouldDisplay(RequestType, double);
void outputLine(int, const string&, double);

int main(){
    // ifstream constructor opens the file       
    ifstream inClientFile{"clients.txt", ios::in};
    
    // exit program if ifstream could not open file
    if(!inClientFile){
        cerr << "File could not be opened" << endl;
        exit(EXIT_FAILURE);
    }
    
    // get user's request (e.g., zero, credit or debit balance)
    RequestType request{getRequest()};
    
    // process user's request
    while(request != RequestType::END){
        switch(request){
            case RequestType::ZERO_BALANCE:
                cout << "\nAccounts with zero balances:\n";
                break;
            case RequestType::CREDIT_BALANCE:
                cout << "\nAccounts with credit balances:\n";
                break;
            case RequestType::DEBIT_BALANCE:
                cout << "\nAccounts with debit balances:\n";
                break;
        }
        
        int account; // the account number 
        string name; // the account owner's name
        double balance; // the account balance
        
        // read account, name and balance from file 
        inClientFile >> account >> name >> balance;

        // display file contents (until eof)
        while(!inClientFile.eof()){
            // display record
            if(shouldDisplay(request, balance)){
                outputLine(account, name, balance); 
            }

            // read account, name and balance from file 
            inClientFile >> account >> name >> balance; 
        }
        
        inClientFile.clear(); // reset eof for next input          
        inClientFile.seekg(0); // reposition to beginning of file     
        request = getRequest(); // get additional request from user
    }   

    cout << "End of run." << endl;
}       

// obtain request from user
RequestType getRequest(){
    // display request options 
    cout << "\nEnter request\n" << " 1 - List accounts with zero balances\n" 
                                << " 2 - List accounts with credit balances\n" 
                                << " 3 - List accounts with debit balances\n"  
                                << " 4 - End of run" << fixed << showpoint;
    
    int type; // request from user
    
    do{ // input user request
        cout << "\n? ";
        cin >> type;
    } while(type < static_cast<int>(RequestType::ZERO_BALANCE) || type > static_cast<int>(RequestType::END));
    
    return static_cast<RequestType>(type);
}
// determine whether to display given record
bool shouldDisplay(RequestType type, double balance){
    // determine whether to display zero balances
    if(type == RequestType::ZERO_BALANCE && balance == 0){ 
        return true;
    }
    
    // determine whether to display credit balances
    if(type == RequestType::CREDIT_BALANCE && balance < 0){ 
        return true;
    }
    
    // determine whether to display debit balances
    if(type == RequestType::DEBIT_BALANCE && balance > 0){
        return true;
    } 
    
    return false; 
} 

// display single record from file
void outputLine(int account, const string& name, double balance){
    cout << left << setw(10) << account << setw(13) << name << setw(7) << setprecision(2) << right << balance << endl;
} 