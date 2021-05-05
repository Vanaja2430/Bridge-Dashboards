setInterval(showTime, 1000);
const days = ["Sun", "Mon", "Tue", "Wed", "Thursday", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let month = time.getMonth();
            let day = time.getDay();
            let date = time.getDate();
            am_pm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = days[day] + ", " + months[month] + " " + date + ", " + hour + ":" 
                + min + ":" + sec + am_pm;
            
            let p1 = min * 2 + 2 * hour;
            let p2 = min * 15 + 3 * hour;
            let p3 = min * 24 + hour * 4;
            let pba = min * 12 + 5 * hour;
            let ipba = min * 9 + hour * 6;
            let opom = hour * 1 + 3;
            let edpp = min * 33 + hour * 15;
            
  
            document.getElementById("clock")
                .innerHTML = currentTime;

            document.getElementById("p1")
                .innerHTML = p1;
            document.getElementById("p2")
                .innerHTML = p2
            document.getElementById("p3")
                .innerHTML = p3
            document.getElementById("pba")
                .innerHTML = pba;
            document.getElementById("ipba")
                .innerHTML = ipba;
            document.getElementById("opom")
                .innerHTML = opom;
            document.getElementById("edpp")
                .innerHTML = edpp
        }
  
        showTime();