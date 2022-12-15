
import { BusCompanyWallet } from "../pages/Chat/BusCompanyWallet";
import { ChatHelp } from "../pages/Chat/ChatHelp";
import { DirectSupport } from "../pages/Chat/DirectSupport";
import { DirectSupportChat } from "../pages/Chat/DirectSupportChat";
import { PioltsAndCopiolts } from "../pages/Chat/PioltsAndCopiolts";
import { CustomerSupport } from "../pages/CustomerServices/CustomerSupport";

import { DelegateTask } from "../pages/DelegateTask/DelegateTask";
import { Approve } from "../pages/Demographics/Components.tsx/Approve";
import { Demograph } from "../pages/Demographics/Components.tsx/Demograph";
import { DemoUserHistory } from "../pages/Demographics/Components.tsx/DemoUserHistory";
import { JopayGrowth } from "../pages/Demographics/Components.tsx/JopayGrowth";
import { KycVerification } from "../pages/Demographics/Components.tsx/KycVerification";
import { pendingrequest } from "../pages/Demographics/Components.tsx/Pendingrequest";
import { Reject } from "../pages/Demographics/Components.tsx/Rejact";
import { Demographics } from "../pages/Demographics/Demographics";
import { Mytransaction } from "../pages/Wallet/Components.tsx/Mytransaction";
import { SendMoney } from "../pages/Wallet/Components.tsx/SendMoney";
import { UserSendMoney } from "../pages/Wallet/Components.tsx/UserSendMoney";
import { Withdrawl } from "../pages/Wallet/Components.tsx/Withdrawl";
import { Wallet } from "../pages/Wallet/Wallet";



const routes: { path: string; Element: () => JSX.Element }[] = [

  {path: "/demographics" , Element: Demographics},
  {path: "/wallet" , Element:Wallet},
  {path:"/demograph" , Element: Demograph},
  {path:"/demo-user-history", Element: DemoUserHistory},
  {path:"/jopay-growth", Element: JopayGrowth},
  {path:"/kyc-verification", Element: KycVerification},
  {path:"/pending-request", Element: pendingrequest},
  {path:"/approve", Element: Approve},
  {path:"/reject", Element: Reject},
  {path:"/my-transaction", Element: Mytransaction},
  {path:"/wallet-withdrawl", Element: Withdrawl},
  {path:"/send-money", Element:SendMoney},
  {path:"/user-send-money", Element:UserSendMoney},
  {path:"/delegate-task", Element: DelegateTask},
  {path:"/direct-support",Element: DirectSupport },
  {path:"/piolts-and-co-piolts", Element: PioltsAndCopiolts},
  {path:"/direct-support-chat", Element: DirectSupportChat},
  {path:"/chat-help", Element:ChatHelp},
  {path:"bus-company-wallet", Element: BusCompanyWallet},
  {path:"/customer-support", Element: CustomerSupport},

  

];

export default routes;
