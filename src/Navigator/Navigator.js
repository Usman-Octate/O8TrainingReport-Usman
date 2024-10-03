import React from "react";
import SideNav from "../components/mainNav/SideNav";
import styled from "styled-components";
import Dashboard from "../pages/dashboard/Dashboard";
import { useState } from "react";
import ChartOfAccountsList from "../pages/Finance/ChartOfAccountsList";
import CustomerList from "../pages/OrderToCash/CustomerList";
import PriceList from "../pages/OrderToCash/PriceList";
import SalesAgents from "../pages/OrderToCash/SalesAgents";
import SalesQoutation from "../pages/OrderToCash/Transactions/SalesQoutation";
import CurrencyList from "../pages/Finance/CurrencyList";
import SalesOrder from "../pages/OrderToCash/Transactions/SalesOrder";
import DeliveryNote from "../pages/OrderToCash/Transactions/DeliveryNote";
import CustomerReturn from "../pages/OrderToCash/Transactions/CustomerReturn";
import SalesInvoice from "../pages/OrderToCash/Transactions/SalesInvoice";
import CreditNote from "../pages/OrderToCash/Transactions/CreditNote";
import BudgetList from "../pages/Finance/BudgetList";
import CashFlow from "../pages/Finance/CashFlow";
import TaxSetup from "../pages/Finance/TaxSetup";
import O2Cadjustment from "../pages/OrderToCash/Transactions/O2Cadjustment";
import RecurringInvoice from "../pages/OrderToCash/Transactions/RecurringInvoice";
import JournalEntryList from "../pages/Finance/Transactions/JournalEntryList";
import RecurringTransactions from "../pages/Finance/Transactions/RecurringTransactions";
import ForexRevaluation from "../pages/Finance/Transactions/ForexRevaluation";
import GeneralJournalEntryList from "../pages/Finance/Transactions/GeneralJournalEntries";
import SupplierList from "../pages/ProcureToPay/SupplierList";
import GoodsReceiptNote from "../pages/ProcureToPay/Transactions/GoodsReceiptNote";
import ReturnToSupplier from "../pages/ProcureToPay/Transactions/ReturnToSupplier";
import PurchaseOrder from "../pages/ProcureToPay/Transactions/PurchaseOrder";
import PurchaseInvoice from "../pages/ProcureToPay/Transactions/PurchaseInvoice";
import DebitNote from "../pages/ProcureToPay/Transactions/DebitNote";
import LandedCost from "../pages/ProcureToPay/LandedCost";
import BlanketOrder from "../pages/ProcureToPay/BlanketOrder";
import JournalEntryReversal from "../pages/Finance/Transactions/JournalEntryReversal";
import ProductsList from "../pages/Products&Services/ProductsList";
import Location from "../pages/Products&Services/Location";
import PurchaseReq from "../pages/ProcureToPay/Transactions/PurchaseReq";
import SupplierPayment from "../pages/ProcureToPay/Transactions/SupplierPayment";
import CustomerPayment from "../pages/OrderToCash/Transactions/CustomerPayment";
import Unit from "../pages/Products&Services/Unit";
import BillMaterials from "../pages/Products&Services/BillMaterials";
import PriceListProducts from "../pages/Products&Services/PriceListProducts";
import Discount from "../pages/Products&Services/Discount";
import BankingAccounts from "../pages/Banking/BankingAccounts";
import BankReclonisation from "../pages/Banking/Transactions/BankReclonisation";
import SupplierPayment2 from "../pages/Banking/Transactions/SupplierPayment";
import CustomerPay from "../pages/Banking/Transactions/CustomerPay";
import Main from "../pages/OrderToCash/Layout&Template/Main";
import Main4 from "../pages/Banking/Layout&Template/Main";
import Main3 from "../pages/Products&Services/Layout&Template/Main";
import Main2 from "../pages/ProcureToPay/Layout&Template/Main";
import BankDeposit from "../pages/Banking/Transactions/BankDeposit";
import ChartOfAccountNew from "../New-Screens/ChartOfAccountNew";
import JornalEntrynew from "../New-Screens/JornalEntrynew";
import P2PAdjustment from "../pages/ProcureToPay/Transactions/P2PAdustment";

import StockAdjustment from "../pages/Products&Services/Transactions/StockAdjustment";
import PickListPackaging from "../pages/Products&Services/Transactions/PickListPackaging";
import InspectionList from "../pages/Products&Services/Transactions/InspectionList";
import StockTransfers from "../pages/Products&Services/Transactions/StockTransfers";
import Production from "../pages/Products&Services/Transactions/Production";
import Disassembly from "../pages/Products&Services/Transactions/Disassembly";
import StockRevaluation from "../pages/Products&Services/Transactions/StockRevaluation";
import FinanceSetting from "../pages/Finance/FinanceSettings/FinanceSetting";
import CompanySettings from "../pages/Configuration/CompanySettings";
import CustomFields from "../pages/Configuration/CustomFields";

const Container = styled.div`
  display: flex;
`;

const Navigator = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [toggle, setToggle] = useState(false);
  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setToggle(!toggle);
    } else {
      setSelectedOption(option);
      setToggle(false);
    }
  };
  const handleBreadcrumbClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <Container>
      <SideNav onOptionClick={handleOptionClick} />
      {selectedOption === "Dashboard" ? (
        <Dashboard />
      ) : selectedOption === "KEY10010" ? (
        <ChartOfAccountsList
          key={toggle}
          onBreadcrumbClick={handleBreadcrumbClick}
        />
      ) : selectedOption === "KEY10013" ? (
        <CurrencyList onBreadcrumbClick={handleBreadcrumbClick} key={toggle} />
      ) : selectedOption === "KEY10014" ? (
        <BudgetList />
      ) : selectedOption === "KEY10015" ? (
        <CashFlow />
      ) : selectedOption === "KEY10017" ? (
        <TaxSetup />
      ) : selectedOption === "KEY10024" ? (
        <CustomerList />
      ) : selectedOption === "KEY10025" ? (
        <PriceList />
      ) : selectedOption === "KEY10026" ? (
        <SalesAgents />
      ) : selectedOption === "Sales Quotation" ? (
        <SalesQoutation />
      ) : selectedOption === "Sales Order" ? (
        <SalesOrder />
      ) : selectedOption === "Stock Adjustment" ? (
        <StockAdjustment />
      ) : selectedOption === "Pick List & Packaging" ? (
        <PickListPackaging />
      ) : selectedOption === "Inspection List" ? (
        <InspectionList />
      ) : selectedOption === "Stock Transfer" ? (
        <StockTransfers />
      ) : selectedOption === "Production" ? (
        <Production />
      ) : selectedOption === "Disassembly" ? (
        <Disassembly />
      ) : selectedOption === "Stock Revaluation" ? (
        <StockRevaluation />
      ) : selectedOption === "Delivery Note" ? (
        <DeliveryNote />
      ) : selectedOption === "Customer Return" ? (
        <CustomerReturn />
      ) : selectedOption === "Sales Invoice" ? (
        <SalesInvoice />
      ) : selectedOption === "Credit Note" ? (
        <CreditNote />
      ) : selectedOption === "O2C Adjustment Entry" ? (
        <O2Cadjustment />
      ) : selectedOption === "P2P Adjustment Entry" ? (
        <P2PAdjustment />
      ) : selectedOption === "Recurring Invoice" ? (
        <RecurringInvoice />
      ) : selectedOption === "Journal Entry List" ? (
        <JournalEntryList key={toggle}/>
      ) : selectedOption === "Recurring Transaction" ? (
        <RecurringTransactions />
      ) : selectedOption === "Forex Revaluation" ? (
        <ForexRevaluation />
      ) : selectedOption === "General Journal Entries" ? (
        <GeneralJournalEntryList />
      ) : selectedOption === "KEY10036" ? (
        <SupplierList />
      ) : selectedOption === "Purchase Order" ? (
        <PurchaseOrder />
      ) : selectedOption === "Goods Reciept Note" ? (
        <GoodsReceiptNote />
      ) : selectedOption === "Return to Supplier" ? (
        <ReturnToSupplier />
      ) : selectedOption === "Purchase Invoice" ? (
        <PurchaseInvoice />
      ) : selectedOption === "Debit Note" ? (
        <DebitNote />
      ) : selectedOption === "KEY10037" ? (
        <BlanketOrder />
      ) : selectedOption === "KEY10038" ? (
        <LandedCost />
      ) : selectedOption === "Journal Entry Reversal" ? (
        <JournalEntryReversal />
      ) : selectedOption === "KEY10051" ? (
        <ProductsList />
      ) : selectedOption === "KEY10052" ? (
        <Location />
      ) : selectedOption === "Purchase Request" ? (
        <PurchaseReq />
      ) : selectedOption === "Supplier Payment" ? (
        <SupplierPayment />
      ) : selectedOption === "Customer Payment" ? (
        <CustomerPayment />
      ) : selectedOption === "KEY10053" ? (
        <Unit />
      ) : selectedOption === "KEY10054" ? (
        <BillMaterials />
      ) : selectedOption === "KEY10056" ? (
        <Discount />
      ) : selectedOption === "KEY10055" ? (
        <PriceListProducts />
      ) : selectedOption === "KEY10065" ? (
        <BankingAccounts />
      ) : selectedOption === "Bank Reconciliation" ? (
        <BankReclonisation />
      ) : selectedOption === "Supplier Payment2" ? (
        <SupplierPayment2 />
      ) : selectedOption === "Customer Payment1" ? (
        <CustomerPay />
      ) : selectedOption === "Bank Deposit" ? (
        <BankDeposit />
      ) : selectedOption === "KEY10057" ? (
        <Main />
      ) : selectedOption === "KEY100224" ? (
        <Main2 />
      ) : selectedOption === "KEY100225" ? (
        <Main3 />
      ) : selectedOption === "KEY10085" ? (
        <CompanySettings />
      ) : selectedOption === "KEY100226" ? (
        <Main4 />
      ) : selectedOption === "KEY100227" ? (
        <Main />
      ) : selectedOption === "Journal Entry" ? (
        <JornalEntrynew />
      ) : selectedOption === "KEY10050" ? (
        <FinanceSetting />
      ) : selectedOption === "KEY10090" ? (
        <CustomFields />
      ) : (
        <Dashboard />
      )}
    </Container>
  );
};

export default Navigator;
