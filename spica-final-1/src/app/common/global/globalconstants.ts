import { verifyHostBindings } from "@angular/compiler";
export class Globalconstants {

    public static spiceApiUrl: string = "http://rdweb.spica.com:5213/timeapi";
    public static spiceApiEndpoint_session: string = "/Session/GetSession";
    public static Auth_GetSession_Token: string = "SpicaToken 87F262C4-7FA6-46D3-880D-2F7E15B4F204";
    public static Auth_InSession_Token?: string = "";
    public static spiceApiEndpoint_employee: string = "/Employee";
    public static spiceApiEndpoint_presence: string = "/Presence";

    /// ==============================================================================
    /// ====    RECREATE SESSION IF 19 minutes passed   ==============================
    /// ==============================================================================
    static has19MinsPassed(startDate: Date, endDate: Date): boolean {
        var Difference_In_Time = endDate.getTime() - startDate.getTime();
        var Difference_In_Days = Difference_In_Time / (60000);
        if (Difference_In_Days > 19) {
            return true;
        }
        return false;
    }

    static ReLogin(reEngageSessionCheck: () => void): void {
        if (localStorage.getItem("SpicaApi_Session_Timestamp") === null || localStorage.getItem("SpicaApi_Session_Token") === null) {
            console.log("if");
            reEngageSessionCheck();
            
        }
        else {
            const storedTimeStr = (localStorage.getItem('SpicaApi_Session_Timestamp') + "").toString();
            const storedTimeStr2 = Date.parse(storedTimeStr);
            var storedTime = new Date(storedTimeStr2);
            var new1 = new Date();
            var sessionTimeoutOccured = Globalconstants.has19MinsPassed(storedTime, new1);
            console.log("\n\r StoredTime:", storedTime, "\n\r NewTime:   ", 
            new1, "\n\r 19minpassed: ", sessionTimeoutOccured,
            "\n\r Token:", localStorage.getItem("SpicaApi_Session_Token")
            );
            
            if (sessionTimeoutOccured) {
                reEngageSessionCheck();
                console.log("reEngageSessionCheck() called", true);
            } else if(localStorage.getItem("SpicaApi_Session_Token") === null){
                reEngageSessionCheck();
                console.log("reEngageSessionCheck() called, no token found", true);
            }
            else{
                console.log("reEngageSessionCheck() called", false);
            }
        }
    }

    timeDiffInMinutes(currentdate1: Date, currentdate2: Date): number {
        var Difference_In_Time = currentdate2.getTime() - currentdate1.getTime();
        var Difference_In_Days = Math.floor(Difference_In_Time / (60000));
        return Difference_In_Days;
    }
}