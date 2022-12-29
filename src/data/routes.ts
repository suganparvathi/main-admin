
import MonthlyChart from "../components/MonthlyChart";
import AddBusCompany from "../pages/AddBusCompany/AddBusCompany";
import { AddNewBusCompany } from "../pages/AddBusCompany/Components/AddNewBusCompany";
import { Bin } from "../pages/AddBusCompany/Components/Bin";
import { BusCompanyList } from "../pages/AddBusCompany/Components/BusCompanyList";
import { DeletedSuccessfully } from "../pages/AddBusCompany/Components/DeletedSuccessfully";
import { BlockingReport } from "../pages/BlockingReport.tsx/BlockingReport";
import { UserBlockingReport } from "../pages/BlockingReport.tsx/UserBlockingReport";
import { BusCompanyWallet } from "../pages/Chat/BusCompanyWallet";
import { ChatHelp } from "../pages/Chat/ChatHelp";
import { DirectSupport } from "../pages/Chat/DirectSupport";
import { DirectSupportChat } from "../pages/Chat/DirectSupportChat";
import { PioltsAndCopiolts } from "../pages/Chat/PioltsAndCopiolts";
import { Token } from "../pages/Chat/Token";
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
import { AddBusBin } from "../pages/GenerateCupon/Components/AddBusBin";
import { AddCupon } from "../pages/GenerateCupon/Components/AddCupon";
import { AddImages } from "../pages/GenerateCupon/Components/AddImages";
import { AddOffer } from "../pages/GenerateCupon/Components/AddOffer";
import { CuponHistory } from "../pages/GenerateCupon/Components/CuponHistory";
import { JogooImages } from "../pages/GenerateCupon/Components/JogooImages";
import { OfferHistory } from "../pages/GenerateCupon/Components/OfferHistory";
import { RemoveCupon } from "../pages/GenerateCupon/Components/RemoveCupon";
import { RemoveOffer } from "../pages/GenerateCupon/Components/RemoveOffer";
import { ViewImages } from "../pages/GenerateCupon/Components/ViewImages";
import { GenerateCupon } from "../pages/GenerateCupon/GenerateCupon";
import { PlaceAds } from "../pages/PlaceAds/PlaceAds";
import { Prof } from "../pages/Profile/Prof";
import { NewTimeSchedule } from "../pages/Refunding/Components/NewTimeSchedule";
import { OlaBusCompany } from "../pages/Refunding/Components/OlaBusCompany";
import { OlaBusCompanyTripList } from "../pages/Refunding/Components/OlaBusCompanyTripList";
import { TimeSchedule } from "../pages/Refunding/Components/TimeSchedule";
import { TripsList } from "../pages/Refunding/Components/TripsList";
import { ViewTimeSchedule } from "../pages/Refunding/Components/ViewTimeSchedule";
import { Refunding } from "../pages/Refunding/Refunding";
import { TripsHistory } from "../pages/TripsHistory/TripsHistory";
import { BusTransaction } from "../pages/Wallet/Components.tsx/BusTransaction";
import { Mytransaction } from "../pages/Wallet/Components.tsx/Mytransaction";
import { ScheduleSend } from "../pages/Wallet/Components.tsx/ScheduleSend";
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
  {path:"/blocking-report", Element: BlockingReport},
  {path:"/user-blocking-report", Element: UserBlockingReport},
  {path:"/monthly-chart", Element: MonthlyChart},
  {path:"/add-bus-company", Element: AddBusCompany},
  {path:"/add-new-bus-company", Element: AddNewBusCompany},
  {path:"/deleted-successfully", Element: DeletedSuccessfully},
  {path:"/bus-company-list", Element: BusCompanyList},
  {path:"/bin", Element: Bin},
  {path:"/generate-cupon", Element: GenerateCupon},
  {path:"/add-cupon", Element: AddCupon},
  {path:"/remove-cupon", Element: RemoveCupon},
  {path:"/cupon-history", Element: CuponHistory},
  {path:"/add-offer", Element: AddOffer},
  {path:"/remove-offer", Element: RemoveOffer},
  {path:"/offer-history", Element: OfferHistory},
  {path:"add-bus-bin", Element: AddBusBin},
  {path:"/jogoo-image", Element: JogooImages},
  {path:"/add-images", Element: AddImages},
  {path:"/view-images", Element: ViewImages},
  {path:"/refunding", Element: Refunding},
  {path:"/time-shedule", Element: TimeSchedule},
  {path:"/new-time-schedule", Element: NewTimeSchedule},
  {path:"/trips-list", Element: TripsList},
  {path:"/ola-bus-company", Element: OlaBusCompany},
  {path:"/ola-bus-company-trip-list", Element: OlaBusCompanyTripList},
  {path:"schedule-send", Element:ScheduleSend},
  {path:"/bus-transaction", Element: BusTransaction},
  {path:"/trips-history", Element:TripsHistory},
  {path:"/place-ads", Element: PlaceAds},
  {path:"/token", Element: Token},
  {path:"/profile", Element: Prof},
  {path:"/view-time-schedule", Element: ViewTimeSchedule},
  
  
 
  
 

  

];

export default routes;
