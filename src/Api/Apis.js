import axios from "axios";
import { baseUrl } from "./baseUrl";
import { get } from "react-scroll/modules/mixins/scroller";
/******************************************************AUTHENTICATION************************************************/
export const LoginApi = async (email) => {
  try {
    const response = await axios.post(baseUrl + "/rest/auth/login", {
      email: email,
      // password: password,
    });

    if (response) {
      console.log(response);
      return { status: true, data: response };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};
export const LoginApiPassword = async (email, password) => {
  try {
    const response = await axios.post(baseUrl + "/rest/auth/login", {
      email: email,
      password: password,
    });

    if (response) {
      console.log(response);
      return { status: true, data: response };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};
/******************************************************CHATOFACCOUNTS************************************************/
export const InputPost = async ({ Data }) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (!token) {
      return { status: false, data: "No token found. Please log in." };
    }
    console.log(Data, "asd");
    const res = await axios.post(
      baseUrl + "/chartsofaccount/createaccount?userEmail=" + email,
      Data,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res) {
      console.log("yes");
      return { status: true, data: res };
    } else {
      return { status: false, data: res };
    }
  } catch (error) {
    console.log("lklk");
    return {
      status: false,
      data: error.res ? error.res.data : error.message,
    };
  }
};
export const fetchChartOfAccounts = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(baseUrl + "/chartsofaccount/getAll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
export const ChartofAccountUpdate = async (id, Data) => {
  try {
    console.log("DATA", id, Data.currencies);
    // const accountTypeId = Data.accountType;
    // const accountCategoryId = Data.category;

    // const parentAccountId = Data.parentAccount;
    // const divisionId = Data.division;
    // const departmentId = Data.department;
    // const projectId = Data.project;
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    const response = await axios.put(
      baseUrl + `/chartsofaccount/${id}?userEmail=${email}`,

      {
        accountCode: Data.accountCode,
        accountName: Data.accountName,
        accountType: Data.accountType,
        category: Data.category,
        currencies: Data.currencies,
        isMainAccount: Data.isMainAccount,
        division: Data.division,
        department: Data.department,
        project: Data.project,
        parentAccount: Data.parentAccount,
        isSubAccount: Data.isSubAccount,
        enableCostCenter: Data.enableCostCenter,
        allowBudget: Data.allowBudget,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error Updaing data :" + error);
  }
};
export const ChartofAccountDelete = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const Response = await axios.delete(
      baseUrl + `/chartsofaccount/${id}?userEmail=${email}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response : ", Response);
    if (Response) {
      return { status: true, data: Response };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.log(error);
  }
};
export const ChartofAccountSend = async (
  id,
  accountCode,
  accountName,
  accountType,
  balance,
  category,
  // status,
  currency,
  parentAccount,
  balanceFC,
  division,
  department,
  project,
  isSubAccount,
  enableCostCenter,
  allowBudget
) => {
  try {
    const accountTypeId = accountType.label;
    const accountCategoryId = category.label;
    const currencyId = currency.label;
    const parentAccountId = parentAccount.label;
    const divisionId = division.label;
    const departmentId = department.label;
    const projectId = project.label;

    const token = localStorage.getItem("token");
    const response = await axios.get(
      baseUrl + `/chartsofaccount/getById/${id}`,
      {
        accountCode: accountCode,
        accountName: accountName,
        accountType: accountTypeId,
        balance: parseFloat(balance),
        category: accountCategoryId,
        currency: currencyId,
        parentAccount: parentAccountId,
        balanceFC: balanceFC,
        division: divisionId,
        department: departmentId,
        project: projectId,
        isSubAccount: isSubAccount,
        enableCostCenter: enableCostCenter,
        allowBudget: allowBudget,
        // customFields: customFields,
        // status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    if (response) {
      return { status: true, data: response };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error uploading currency information:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};
/******************************************************CURRENCY***********************************************/
export const CurrencyUpload = async (
  currencyCode,
  currencyName,
  currencySign,
  // currencyDate,
  lossAccount,
  gainAccount,
  exchange,
  notes,
  defaultCur
) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    console.log(token);

    if (!token) {
      return { status: false, data: "No token found. Please log in." };
    }
    const realized = gainAccount.label;
    const Unrealized = lossAccount.label;

    const response = await axios.post(
      baseUrl + "/currency/create?userEmail=" + email,

      {
        currencyName: currencyName,
        currencyCode: currencyCode,
        currencySign: currencySign,
        date: "2024-07-09",
        unrealizedGainLossAccount: Unrealized,
        realizedGainLossAccount: realized,
        exchangeRate: exchange,
        notes: notes,
        isDefaultCurrency: defaultCur,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${token}`,
        },
      }
    );
    console.log("Response received:", response.data);

    if (response) {
      return { status: true, data: response };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error uploading currency information:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};
export const GetCurrency = async () => {
  try {
    const response = await axios.get(baseUrl + "/currency/getAll", {});
    console.log(response.data, "Data Fetched");
    if (response) {
      console.log(response);
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.log(error);
  }
};
export const CurrencyDelete = async (id) => {
  try {
    console.log(id);
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    const Response = await axios.delete(
      baseUrl + `/currency/deleteById/${id}?userEmail=${email}`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (Response) {
      return { status: true, data: Response };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.log(error);
  }
};
export const CurrencyUpdate = async (
  id,
  currencyCode,
  currencyName,
  currencySign,
  // currencyDate,
  lossAccount,
  gainAccount,
  exchange,
  notes,
  defaultCur
) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token) {
      return { status: false, data: "No token found. Please log in." };
    }
    const realized = gainAccount.label;
    const Unrealized = lossAccount.label;

    const response = await axios.put(
      baseUrl + "/currency/updateById/" + id + "?userEmail=" + email,

      {
        currencyName: currencyName,
        currencyCode: currencyCode,
        currencySign: currencySign,
        date: "2024-07-09",
        unrealizedGainLossAccount: Unrealized,
        realizedGainLossAccount: realized,
        exchangeRate: exchange,
        notes: notes,
        isDefaultCurrency: defaultCur,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response received:", response.data);

    if (response) {
      return { status: true, data: response };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error uploading currency information:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};
/*ACTIVITY*/
export const GetActivities = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(baseUrl + "/api/activities/getAll", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.log(error);
  }
};

export const PostFinanceSettings = async (
  AccMethod,
  Currency,
  Reversal,
  Frequency,
  number,
  Date,
  Recurring,
  Grouping,
  NegSign,
  Separator,
  Quantity,
  Amount,
  Decimal
) => {
  const AccountMethod = AccMethod.value;
  const AccountCurrency = Currency.value;
  const ReversalMethod = Reversal.value;
  const FrequencyMethod = Frequency.value;
  const DateMethod = Date.value;
  const RecurringMethod = Recurring.value;
  const GroupingMethod = Grouping.value;
  const NegSignMethod = NegSign.value;
  const SeparatorMethod = Separator.value;
  const QuantityMethod = Quantity.value;
  const AmountMethod = Amount.value;
  const DecimalMethod = Decimal.value;

  try {
    console.log(ReversalMethod);

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const Response = await axios.post(
      baseUrl + "/api/finance/create?userEmail=" + email,
      {
        accountingMethod: AccountMethod,
        currency: AccountCurrency,
        autoReversalDate: DateMethod,
        frequency: FrequencyMethod,
        repeatsOn: RecurringMethod,
        endsAfterOccurrences: number,
        endsOnDate: DateMethod,
        numberGrouping: GroupingMethod,
        negativeSign: NegSignMethod,
        numberSeparator: SeparatorMethod,
        quantity: QuantityMethod,
        amountFields: AmountMethod,
        decimalSeparator: DecimalMethod,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response Received", Response);

    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.error("Error uploading finance settings:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};
export const GetFinanceSettings = async () => {
  const email = localStorage.getItem("email");
  try {
    const Response = await axios.get(
      baseUrl + "/api/finance/getByEmail/" + email
    );
    console.log(Response.data);
    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.log(error);
  }
};

export const UpdateFinanceSettings = async (
  AccMethod,
  Currency,
  Reversal,
  Frequency,
  number,
  Date,
  Recurring,
  Grouping,
  NegSign,
  Separator,
  Quantity,
  Amount,
  Decimal
) => {
  const AccountMethod = AccMethod.value;
  const AccountCurrency = Currency.value;
  const ReversalMethod = Reversal.value;
  const FrequencyMethod = Frequency.value;
  const DateMethod = Date.value;
  const RecurringMethod = Recurring.value;
  const GroupingMethod = Grouping.value;
  const NegSignMethod = NegSign.value;
  const SeparatorMethod = Separator.value;
  const QuantityMethod = Quantity.value;
  const AmountMethod = Amount.value;
  const DecimalMethod = Decimal.value;

  const email = localStorage.getItem("email");

  const token = localStorage.getItem("token");

  try {
    const Response = await axios.put(
      baseUrl + "/api/finance/update/jorgeamurao@gmail.com?userEmail=" + email,
      {
        accountingMethod: AccountMethod,
        currency: AccountCurrency,
        autoReversalDate: DateMethod,
        frequency: FrequencyMethod,
        repeatsOn: RecurringMethod,
        endsAfterOccurrences: number,
        endsOnDate: DateMethod,
        numberGrouping: GroupingMethod,
        negativeSign: NegSignMethod,
        numberSeparator: SeparatorMethod,
        quantity: QuantityMethod,
        amountFields: AmountMethod,
        decimalSeparator: DecimalMethod,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(Response.data);

    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.error("Error uploading finance settings:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

// **********************************************************ATTACHMENT UPLOAD *************************************************************

export const AttachmentUpload = async (formData) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  console.log(formData, "File to Upload");

  try {
    const Response = await axios.post(
      baseUrl + "/api/attachments/upload",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response :", Response);
    if (Response) {
      return { status: true, data: Response };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.error("Error uploading of Document:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

export const AttachmentGet = async () => {
  const token = localStorage.getItem("token");

  try {
    const Response = await axios.get(baseUrl + "/api/attachments/getAll", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("Response :", Response);
    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.error("Error uploading of Document:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

// **********************************************************JOURNAL ENTRY***********************************************************

// export const JournalEntryPost = async () => {
//   const token = localStorage.getItem("token");
//   const email = localStorage.getItem("email");

//   try {
//     const Response = await axios.post(
//       baseUrl + "/api/transNumbering/create?userEmail=" + email,

//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     if (Response) {
//       return { status: true, data: Response };
//     } else {
//       return { status: false, data: Response };
//     }
//   } catch (error) {
//     console.error("Error fetching notes:", error);
//     return {
//       status: false,
//       data: error.response ? error.response.data : error.message,
//     };
//   }
// };

// **************************************************************TRANSACTION NUMBERING****************************************************************

export const TransactionPost = async (
  transactionType,
  seriesType,
  length,
  prefix,
  separator,
  suffix,
  firstNumber,
  nextNumber,
  currentNumber,
  defaultValue,
  status
) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  try {
    const Response = await axios.post(
      baseUrl + "/api/transNumbering/create?userEmail=" + email,
      {
        transactionType: transactionType,
        seriesType: seriesType,
        length: length,
        prefix: prefix,
        separator: separator,
        suffix: suffix,
        firstNumber: firstNumber,
        nextNumber: nextNumber,
        currentNumber: currentNumber,
        isDefaultStatus: defaultValue,
        status: status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response :", Response);
    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.error("Error uploading finance settings:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

export const getNextCurrentNumber = async (seriesType) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api/transNumbering/next-current-number`,
      {
        params: { seriesType },
      }
    );
    console.log(response);
    if (response && response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.log(error);
    return { status: false, error: error.message };
  }
};

export const TransactionGet = async () => {
  try {
    const Response = await axios.get(baseUrl + "/api/transNumbering/getAll");
    console.log(Response);
    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response };
    }
  } catch (error) {
    console.log(error);
  }
};

export const TransactionUpdateNew = async (
  id,
  seriesType,
  length,
  prefix,
  separator,
  suffix,
  firstNumber,
  nextNumber,
  currentNumber,
  defaultValue,
  status
) => {
  try {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const response = await axios.put(
      baseUrl + `/api/transNumbering/update/${id}?userEmail=` + email,
      {
        transactionType: "Journal Entry",
        seriesType,
        length,
        prefix,
        separator,
        suffix,
        firstNumber,
        nextNumber,
        currentNumber,
        isDefaultStatus: defaultValue,
        status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response.data };
    }
  } catch (error) {
    console.error("API call failed:", error);
    return { status: false, data: error.response?.data || error.message };
  }
};

export const TransactionUpdateSeries = async (
  id,
  seriesType,
  length,
  prefix,
  separator,
  suffix,
  firstNumber,
  nextNumber,
  currentNumber,
  defaultValue,
  status
) => {
  try {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const response = await axios.put(
      `${baseUrl}/api/transNumbering/update/${id}?userEmail=${email}`, // Make sure id is correctly inserted
      {
        transactionType: "Journal Entry",
        seriesType,
        length,
        prefix,
        separator,
        suffix,
        firstNumber,
        nextNumber,
        currentNumber,
        isDefaultStatus: defaultValue,
        status,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response.data };
    }
  } catch (error) {
    console.error("API call failed:", error);
    return { status: false, data: error.response?.data || error.message };
  }
};

export const TransactionUpdate = async (id, status) => {
  try {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const response = await axios.put(
      baseUrl + `/api/transNumbering/update/${id}?userEmail=${email}`,
      { status }, // Only sending `status` in the request body
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response.data };
    }
  } catch (error) {
    console.error("API call failed:", error);
    return { status: false, data: error.response?.data || error.message };
  }
};

export const TransactionDefaultUpdate = async (id, isDefaultStatus) => {
  try {
    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const response = await axios.put(
      baseUrl + `/api/transNumbering/update/${id}?userEmail=` + email,
      {
        id: id,
        isDefaultStatus,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response.data };
    }
  } catch (error) {
    console.error("API call failed:", error);
    return { status: false, data: error.response?.data || error.message };
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////** / Journel Entry Api ***//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////// Notes Apis ////////////////////////////////////////////////////

export const fetchAllNotes = async (journalEntryId) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the API URL with the journalEntryId
    const response = await axios.get(
      `${baseUrl}/api/internalNotes/getAll?userEmail=${email}&journalEntryId=${journalEntryId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: response };
    }
  } catch (error) {
    console.error("Error fetching notes:", error);
    return {
      status: false,
      data: error.response ? error.response.data : error.message,
    };
  }
};

/////////////////////////////////////////////////////////////////////

export const createNote = async (newNote, journalEntryId) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with userEmail and journalEntryId
    const url = `${baseUrl}/api/internalNotes/create?userEmail=${email}&journalEntryId=${journalEntryId}`;

    // Make the API request
    const response = await axios.post(url, newNote, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

///////////////////////////////////////////////////////////////////////////////////

export const updateNote = async (id, updatedData) => {
  try {
    console.log(updatedData, "lklk");
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    const response = await axios.put(
      `${baseUrl}/api/internalNotes/update/${id}?userEmail=${email}`,
      { notesDetail: updatedData.notedetail },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error updating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

/////////////////////////////////////////////////////////////////////////////////////////

export const deleteNote = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    const response = await axios.delete(
      `${baseUrl}/api/internalNotes/delete/${id}?userEmail=${email}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error deleting note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

//////////////////////////////////////Journel Entry Apis //////////////////////////////////////////////////

export const JournalEntryPost = async (newEntry) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with userEmail
    const url = `${baseUrl}/journalentry/create?userEmail=${email}`;

    // Make the API request
    const response = await axios.post(url, newEntry, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating journal entry:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

/////////////////////////////////////////////////////////////////

export const getAllJournalEntries = async () => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    const url = `${baseUrl}/journalentry/getAll?userEmail=${email}`;

    console.log("Token:", token);
    console.log("Email:", email);
    console.log("URL:", url);

    // Make the API request
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Log the full response
    console.log("Full response:", response);

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;

    // Log full error details

    console.error("Error details:", error);
    console.error("Error fetching journal entries:", errorMessage);

    return {
      status: false,
      data: errorMessage,
    };
  }
};

////////////////////////////////////////////////////////////////////

export const updateJournalEntry = async (id, updatedData) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with userEmail and ID
    const url = `${baseUrl}/journalentry/update/${id}?userEmail=${email}`;

    // Make the API request
    const response = await axios.put(url, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error updating journal entry:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

////////////////////////////////////////////////////////////////////////

export const deleteJournalEntry = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with userEmail and ID
    const url = `${baseUrl}/journalentry/delete/${id}?userEmail=${email}`;

    // Make the API request
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error deleting journal entry:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};
// //////////////////////////////////////////////COST CENTER////////////////////////////////////////////

export const CostCenterPost = async (
  costCenterCode,
  costCenter,
  costCenterName,
  status
) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    const CostCenterValue = costCenter.label;
    const SelectedOptionId = costCenter.value;

    console.log(CostCenterValue, "xwxqw");

    const Response = await axios.post(
      baseUrl + "/api/costcenter/create?segmentDataId=" + SelectedOptionId,
      {
        segment: CostCenterValue,
        name: costCenterName,
        code: costCenterCode,
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(Response);
    if (Response) {
      return { status: true, data: Response };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};
export const CostCenterPostCoa = async (
  defaultValue,
  costCenterValue,
  SegmentValue,
  status,
  SelectedOptionID
) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.post(
    baseUrl + "/api/costcenter/create?segmentDataId=" + SelectedOptionID,
    {
      segment: defaultValue,
      name: costCenterValue,
      code: SegmentValue,
      status: status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Response);
  if (Response) {
    return { status: true, data: Response };
  } else {
    return { status: false, data: "Unexpected response format." };
  }
};

export const CostCenterGet = async () => {
  try {
    const token = localStorage.getItem("token");
    const Response = await axios.get(baseUrl + "/api/costcenter/getAll", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log(Response, "----Response----");

    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response.message };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

export const CostCenterUpdate = async (id, status) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  try {
    const Response = await axios.put(
      baseUrl + "/api/costcenter/update/" + id + "?userEmail=" + email,
      {
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(Response, "---Response---");

    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response.data };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};
// //////////////////////////////////////////////SEGMENT //////////////////////////////////////////////

export const GetSegment = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  try {
    const Response = await axios.get(
      baseUrl + "/api/segments/getData?userEmail=" + email,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(Response, "---Response---");
    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response.data };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

export const UpdateSegment = async (rowID, segmentName, status) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  try {
    const Response = await axios.put(
      baseUrl + "/api/segments/update/" + rowID + "?userEmail=" + email,
      {
        segment: segmentName,
        status: status,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(Response, "---Response---");
    if (Response) {
      return { status: true, data: Response.data };
    } else {
      return { status: false, data: Response.data };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating note:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

// /////////////////////////////////////////////////////ACCOUNT TYPE AND CATEGORY//////////////////////////////////////////////////////

export const CreateAccountType = async (
  AccountCategory,
  AccountType,
  Status
) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const AccountCategoryValue = AccountCategory?.value;

  console.log(AccountType, AccountCategoryValue, Status, "werewr");

  const Response = await axios.post(
    baseUrl + "/api/accountType/create?userEmail=" + email,
    {
      accountType: AccountType,
      accountCategory: AccountCategoryValue,
      status: Status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const GetAccountType = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.get(baseUrl + "/api/categories/get", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const AccountTypeTableData = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.get(baseUrl + "/api/accountType/getAll", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const UpdateAccountType = async (id, Status) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.put(
    baseUrl + "/api/accountType/update/" + id + "?userEmail=" + email,
    {
      status: Status,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

// ////////////////////////////////////////////////////FINANCE SETTINGS CURRENCY///////////////////////////////////////////////////////

export const GetDefineCurrency = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.get(baseUrl + "/api/currencies/get", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const UpdateCurrencyStatus = async (
  id,
  status,
  realized,
  unrealized,
  decimalValue
) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.put(
    baseUrl + "/api/currencies/update/" + id,
    {
      status: status,
      // decimalPlaces: decimalValue,
      realizedGainLossAccount: [realized],
      unrealizedGainLossAccount: [unrealized],
      decimalPlaces: parseInt(decimalValue),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const BaseCurrencyPost = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.post(baseUrl + "/api/baseCurrency/create", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const GetBaseCurrency = async () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.get(
    baseUrl + "/api/baseCurrency/getDefault?userEmail=" + email,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};

export const UpdateBaseCurrency = async (Name, FullName) => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const Response = await axios.put(
    baseUrl + "/api/baseCurrency/update/52?userEmail=" + email,
    {
      currencyCode: Name,
      currencyName: FullName,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Response, "---Response---");
  if (Response) {
    return { status: true, data: Response.data };
  } else {
    return { status: false, data: Response.data };
  }
};
///////////////////////////////////////////////////////////////


export const createTableDetails = async (journalEntryId, tableDetails) => {
  try {
    const token = localStorage.getItem("token"); // Ensure token is retrieved
    if (!token) {
      throw new Error("Authorization token not found. Please log in.");
    }

    const url = `${baseUrl}/api/tableDetails/create?journalEntryId=${journalEntryId}`;

    const response = await axios.post(url, tableDetails, {
      headers: {
        Authorization: `Bearer ${token}`, // Attach token to the request
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating table details:", error.response?.data || error.message);
    throw error;
  }
};


export const updateTableDetails = async (journalEntryId, updateData) => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    const url = `${baseUrl}/api/tableDetails/update/${journalEntryId}?userEmail=${email}`;

    const response = await axios.put(url, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error updating table details:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};
//////////////////////////////////////////////////////////

export const getDefaultLocalization = async () => {
  try {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    const url = `${baseUrl}/api/localization/getDefault?userEmail=${email}`;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error fetching default localization:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};


export const updateLocalization = async () => {
  try {
    // Get the token and email from localStorage
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    // Check if the token and email are available
    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with ID set to 3
    const url = `${baseUrl}localization/update/3?userEmail=${email}`;

    // Make the PUT request to update the localization without sending any data in the body
    const response = await axios.put(url, null, { // Sending null as data
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Check if the response contains data
    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    // Handle any errors that occur during the request
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error updating localization:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};




/////////////////////////////////////////////////////////////////////////


export const createFiscalYear = async (fiscalYearData) => {
  try {
    // Get the token and email from localStorage
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    // Check if the token and email are available
    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with userEmail
    const url = `${baseUrl}/api/fiscalyear/create?userEmail=${email}`;

    // Make the POST request to create the fiscal year
    const response = await axios.post(url, fiscalYearData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Check if the response contains data
    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    // Handle any errors that occur during the request
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error creating fiscal year:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};

export const getAllFiscalYears = async () => {
  try {
    // Get the token and email from localStorage
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    // Check if the token and email are available
    if (!token || !email) {
      return { status: false, data: "No token or email found. Please log in." };
    }

    // Construct the URL with userEmail
    const url = `${baseUrl}/api/fiscalyear/getAll`;

    // Make the GET request to get all fiscal years
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Check if the response contains data
    if (response.data) {
      return { status: true, data: response.data };
    } else {
      return { status: false, data: "Unexpected response format." };
    }
  } catch (error) {
    // Handle any errors that occur during the request
    const errorMessage = error.response ? error.response.data : error.message;
    console.error("Error fetching fiscal years:", errorMessage);
    return {
      status: false,
      data: errorMessage,
    };
  }
};
