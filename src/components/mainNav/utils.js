import {
  FinanceTransaction,
  Common,
  BankTransaction,
  ProjectTransaction,
  OrderCashTrans,
  ProcureTransaction,
  ProductTrans,
} from "../../assets2/SideNavIcons/Images";
import {
  BsCart3,
  BsBoxes,
  BsUiChecksGrid,
  BsJournals,
  BsJournalText,
  BsJournalCode,
  BsClipboardData,
  BsClipboardCheck,
  BsSuitcaseLg,
  BsGear,
} from "react-icons/bs";
import {
  RiBankLine,
  RiExchangeFundsLine,
  RiShoppingBasketLine,
  RiSecurePaymentLine,
} from "react-icons/ri";
import {
  TbTools,
  TbTruckReturn,
  TbReportAnalytics,
  TbAdjustments,
} from "react-icons/tb";
import { AiOutlineTransaction, AiOutlineFileSync } from "react-icons/ai";
import {
  PiReceipt,
  PiBoxArrowUpLight,
  PiCodesandboxLogoLight,
} from "react-icons/pi";
import {
  MdOutlineRequestQuote,
  MdOutlineContentPasteSearch,
  MdOutlineUpdate,
  MdOutlineInventory,
  MdAutoGraph,
  MdOutlineInsights,
} from "react-icons/md";
import {
  HiOutlineDocumentChartBar,
  HiOutlineAdjustmentsHorizontal,
  HiOutlineBanknotes,
} from "react-icons/hi2";
import {
  LiaTruckSolid,
  LiaPiggyBankSolid,
  LiaCoinsSolid,
  LiaBuffer,
  LiaMoneyCheckAltSolid,
  LiaFileInvoiceDollarSolid,
  LiaBalanceScaleSolid,
  LiaFileInvoiceSolid,
  LiaClipboardListSolid,
} from "react-icons/lia";
import { GoPackageDependents } from "react-icons/go";
import { GrDocumentPerformance, GrMoney } from "react-icons/gr";
import { IoDocumentLockOutline } from "react-icons/io5";
import { GrDocumentTransfer } from "react-icons/gr";
import { VscActivateBreakpoints } from "react-icons/vsc";
import {
  LuPackageCheck,
  LuFileBox,
  LuFileSymlink,
  LuFileBadge,
  LuFileClock,
} from "react-icons/lu";
import { FaReceipt, FaMoneyCheck, FaBuffer } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TfiBarChart } from "react-icons/tfi";

export const navIcons = {
  dashboard: "Dashboard",
  finance: "Finance",
  order: "Order",
  purchasing: "Purchasing",
  inventory: "Inventory",
  banking: "Banking",
  project: "Projects",
  report: "Reports",
  configure: "Configuration",
  custom: "Custom",
};

export const option = [
  {
    title: "KEY1001",
    // icon: navIcons.finance,
    icon: <LiaCoinsSolid size={23} />,
    menu: [
      "KEY10010",
      "KEY10011",
      "KEY10013",
      "KEY10014",
      "KEY10015",
      "KEY10016",
      "KEY10017",
      "KEY10049",
      "KEY10050",
    ],
    submenu: [
      {
        id: "KEY10011",
        data: [
          {
            // icon: FinanceTransaction.finJournal,
            icon: <BsJournals />,
            title: "KEY10018",
          },

          {
            // icon: FinanceTransaction.finJournalList,
            icon: <BsJournalText />,
            title: "KEY10019",
          },
          {
            // icon: FinanceTransaction.finJournalEntry,
            icon: <BsJournalCode />,
            title: "KEY10020",
          },
          {
            // icon: FinanceTransaction.finRecurringTrans,
            icon: <RiExchangeFundsLine />,
            title: "KEY10021",
          },
          {
            // icon: FinanceTransaction.finRevalution,
            icon: <AiOutlineTransaction />,
            title: "KEY10022",
          },
          {
            // icon: FinanceTransaction.finGeneral,
            icon: <LiaBuffer />,
            title: "KEY10023",
          },
        ],
      },
      {
        id: "KEY10049",
        data: [
          {
            icon: <MdAutoGraph />,
            title: "KEY100113",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100114",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100115",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100116",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100117",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100118",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100119",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100120",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100121",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100122",
          },
        ],
      },
    ],
  },

  {
    title: "KEY1002",
    // icon: navIcons.order,
    icon: <TfiBarChart />,
    menu: [
      "KEY10024",
      "KEY10011",
      "KEY10025",
      "KEY10026",
      "KEY10057",
      "KEY10081",
      "KEY10082",
    ],
    submenu: [
      {
        id: "KEY10011",
        data: [
          {
            // icon: OrderCashTrans.qoutation,
            icon: <MdOutlineRequestQuote />,
            title: "KEY10027",
          },
          {
            // icon: OrderCashTrans.order,
            icon: <LiaFileInvoiceSolid />,
            title: "KEY10028",
          },
          {
            // icon: OrderCashTrans.delivery,
            icon: <LiaTruckSolid />,
            title: "KEY10029",
          },
          {
            // icon: OrderCashTrans.customer,
            icon: <TbTruckReturn />,
            title: "KEY10030",
          },
          {
            // icon: OrderCashTrans.invoice,
            icon: <GrDocumentPerformance />,
            title: "KEY10031",
          },
          {
            // icon: OrderCashTrans.recurring,
            icon: <RiExchangeFundsLine />,
            title: "KEY10032",
          },
          {
            // icon: OrderCashTrans.credit,
            icon: <AiOutlineFileSync />,
            title: "KEY10033",
          },
          {
            // icon: OrderCashTrans.payment,
            icon: <LiaMoneyCheckAltSolid />,
            title: "KEY10034",
          },
          {
            // icon: OrderCashTrans.adjust,
            icon: <TbAdjustments />,
            title: "KEY10035",
          },
        ],
      },
      {
        id: "KEY10081",
        data: [
          {
            icon: <MdAutoGraph />,
            title: "KEY100123",
          },
          {
            icon: <MdAutoGraph />,
            title: "KEY100124",
          },
        ],
      },
    ],
  },

  {
    title: "KEY1003",
    // icon: navIcons.purchasing,
    icon: <BsCart3 />,
    menu: [
      "KEY10036",
      "KEY10011",
      "KEY10037",
      "KEY10038",
      "KEY100224",
      "KEY10083",
      "KEY10084",
    ],
    submenu: [
      {
        id: "KEY10011",
        data: [
          {
            // icon: ProcureTransaction.qoutation,
            icon: <LuFileBadge />,
            title: "KEY10039",
          },
          {
            // icon: ProcureTransaction.order,
            icon: <RiShoppingBasketLine />,
            title: "KEY10040",
          },
          {
            // icon: ProcureTransaction.receipt,
            icon: <LuFileBox />,
            title: "KEY10042",
          },
          {
            // icon: ProcureTransaction.supplier,
            icon: <TbTruckReturn />,
            title: "KEY10043",
          },
          {
            // icon: ProcureTransaction.invoice,
            icon: <IoDocumentLockOutline />,
            title: "KEY10044",
          },
          {
            // icon: ProcureTransaction.recurring,
            icon: <RiExchangeFundsLine />,
            title: "KEY10045",
          },
          {
            //  icon: ProcureTransaction.debit,
            icon: <LuFileSymlink />,
            title: "KEY10046",
          },
          {
            //  icon: ProcureTransaction.payment,
            icon: <HiOutlineBanknotes />,
            title: "KEY10047",
          },
          {
            // icon: ProcureTransaction.adjustment,
            icon: <TbAdjustments />,
            title: "KEY10048",
          },
        ],
      },
      {
        id: "KEY10083",
        data: [{ icon: <MdAutoGraph />, title: "KEY100125" }],
      },
    ],
  },

  {
    title: "KEY1004",
    // icon: navIcons.inventory,
    icon: <BsBoxes />,
    menu: [
      "KEY10051",
      "KEY10011",
      "KEY10052",
      "KEY10053",
      "KEY10054",
      "KEY10055",
      "KEY10056",
      "KEY100225",
      "KEY10058",
      "KEY10059",
    ],
    submenu: [
      {
        id: "KEY10011",
        data: [
          {
            // icon: ProductTrans.production,
            icon: <PiCodesandboxLogoLight />,
            title: "KEY100263",
          },
          {
            // icon: ProductTrans.disassembly,
            icon: <VscActivateBreakpoints or md />,
            title: "KEY100264",
          },
          {
            // icon: ProductTrans.adjustment,
            icon: <PiBoxArrowUpLight />,
            title: "KEY10060",
          },
          {
            // icon: ProductTrans.transfer,
            icon: <GoPackageDependents />,
            title: "KEY10061",
          },
          {
            // icon: ProductTrans.pickList,
            icon: <LuPackageCheck />,
            title: "KEY10062",
          },
          {
            // icon: ProductTrans.inspection,
            icon: <MdOutlineContentPasteSearch />,
            title: "KEY10063",
          },
          {
            // icon: ProductTrans.revaluation,
            icon: <MdOutlineUpdate />,
            title: "KEY10064",
          },
        ],
      },
      {
        id: "KEY10058",
        data: [{ icon: <MdAutoGraph />, title: "KEY100126" }],
      },
    ],
  },

  {
    title: "KEY1005",
    // icon: navIcons.banking,
    icon: <RiBankLine />,
    menu: ["KEY10065", "KEY10011", "KEY100226", "KEY10066", "KEY10067"],
    submenu: [
      {
        id: "KEY10011",
        data: [
          {
            // icon: BankTransaction.receipt,
            icon: <LiaMoneyCheckAltSolid />,
            title: "KEY10068",
          },
          {
            // icon: BankTransaction.payment,
            icon: <HiOutlineBanknotes />,
            title: "KEY10069",
          },
          {
            // icon: BankTransaction.deposit,
            icon: <RiSecurePaymentLine />,
            title: "KEY10070",
          },
          {
            // icon: BankTransaction.recon,
            icon: <LiaBalanceScaleSolid />,
            title: "KEY10071",
          },
          {
            // icon: BankTransaction.cheque,
            icon: <CiMoneyCheck1 />,
            title: "KEY10072",
          },
        ],
      },
      {
        id: "KEY10066",
        data: [
          { icon: <MdAutoGraph />, title: "KEY100127" },
          { icon: <MdAutoGraph />, title: "KEY100128" },
        ],
      },
    ],
  },

  {
    title: "KEY1006",
    // icon: navIcons.project,
    icon: <TbTools />,
    menu: [
      "KEY10073",
      "KEY10011",
      "KEY10074",
      "KEY10075",
      "KEY100224",
      "KEY10076",
      "KEY10077",
    ],
    submenu: [
      {
        id: "KEY10011",
        data: [
          {
            // icon: ProjectTransaction.job,
            icon: <BsSuitcaseLg />,
            title: "KEY10078",
          },
          {
            // icon: ProjectTransaction.request,
            icon: <LuFileClock />,
            title: "KEY10079",
          },
          {
            // icon: ProjectTransaction.bill,
            icon: <LiaClipboardListSolid />,
            title: "KEY10080",
          },
        ],
      },
      {
        id: "KEY10076",
        data: [
          { icon: <MdAutoGraph />, title: "KEY100129" },
          { icon: <MdAutoGraph />, title: "KEY100130" },
          { icon: <MdAutoGraph />, title: "KEY100131" },
        ],
      },
    ],
  },

  {
    title: "KEY1007",
    // icon: navIcons.report,
    icon: <MdOutlineInsights />,
    menu: [
      "KEY10049",
      "KEY10081",
      "KEY10083",
      "KEY10058",
      "KEY10066",
      "KEY10076",
    ],
    submenu: [
      {
        id: "KEY10049",
        data: [{ icon: <MdAutoGraph />, title: "KEY100105" }],
      },
      {
        id: "KEY10081",
        data: [{ icon: <MdAutoGraph />, title: "KEY100106" }],
      },
      {
        id: "KEY10083",
        data: [{ icon: <MdAutoGraph />, title: "KEY100107" }],
      },
      {
        id: "KEY10058",
        data: [
          { icon: <MdAutoGraph />, title: "KEY100108" },
          { icon: <MdAutoGraph />, title: "KEY100109" },
        ],
      },
      {
        id: "KEY10066",
        data: [{ icon: <MdAutoGraph />, title: "KEY100110" }],
      },
      {
        id: "KEY10076",
        data: [
          { icon: <MdAutoGraph />, title: "KEY100111" },
          { icon: <MdAutoGraph />, title: "KEY100112" },
        ],
      },
    ],
  },

  {
    title: "KEY1008",
    // icon: navIcons.configure,
    icon: <BsGear />,
    menu: [
      "KEY10085",
      "KEY100363",
      "KEY10088",
      "KEY10090",
      "KEY10087",
     
      
     
      "KEY10089",
    ],
    submenu: [
      { id: "KEY10085", data: [{ icon: "", title: "KEY10091" }] },
      {
        id: "KEY10086",
        data: [{ icon: "", title: "KEY10092"},{ icon: "", title: "KEY10092"},{ icon: "", title: "KEY10092"}],
      },
      {
        id: "KEY10087",
        data: [
          { icon: "", title: "KEY10093" },
          { icon: "", title: "KEY10094" },
        ],
      },
      {
        id: "KEY10090",
        data: [
          { icon: "", title: "KEY10095" },
          { icon: "", title: "KEY10096" },
          { icon: "", title: "KEY10097" },
        ],
      },
      {
        id: "KEY10088",
        data: [{ icon: "", title: "KEY10098" }],
      },
      { id: "KEY10089", data: [{ icon: "", title: "KEY10099" }] },
    ],
  },

  {
    title: "KEY1009",
    // icon: navIcons.custom,
    icon: <BsUiChecksGrid />,
    menu: ["KEY100100", "KEY10011", "KEY10057", "KEY1007", "KEY100101"],
    submenu: [
      { id: "KEY10011", data: [{ icon: "", title: "KEY100102" }] },
      {
        id: "KEY1007",
        data: [
          { icon: <MdAutoGraph />, title: "KEY100103" },
          { icon: <MdAutoGraph />, title: "KEY100104" },
        ],
      },
    ],
  },
];
