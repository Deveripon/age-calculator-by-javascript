const calculator = document.querySelector('.calculator');
const validator = document.querySelector('.validation');
const result = document.querySelector('#result');
calculator.addEventListener('submit', function (e) {
    e.preventDefault();
    const p_date = document.querySelector('input[name="p-date"]').value;
    const dob = document.querySelector('input[name="dob"]').value;


    if (dob == '') {
        validator.innerHTML = validate('Date of birth is required', 'danger');
    } else if (p_date == '') {
        validator.innerHTML = validate('Calculation Time is required', 'danger');
    } else {

        const cal_date = new Date(p_date).getTime();
        const b_date = new Date(dob).getTime();

        let age_ms = (cal_date - b_date);
        let age_sec = age_ms / 1000;
        let age_min = age_sec / 60;
        let age_hour = age_min / 60;
        let age_day = age_hour / 24;
        let age_month = age_day / 30;
        let age_year = age_month / 12;

        let year = Math.floor(age_day / 365);
        let month = Math.floor((age_day - year * 365) / 30);
        let day = Math.floor((age_day - year * 365) - (month * 30));
        result.innerHTML = `
            		<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-5">
						<div class="card shadow-lg">
							<div class="card-body">
                                 <h2 class="card-title">Result</h2>
			                     <p>Your age is</p>
			                     <span>${year} Years ${month} Months ${day} Days</span><br>
			                     <span>Or</span>
			                     <hr>
			                     <span>${age_hour} Hour</span><br>
			                     <span>Or</span>
			                     <hr>
			                     <span>${age_min} Munites</span><br>
			                     <span>Or</span>
			                     <hr>
			                     <span>${age_sec} Seconds</span><br>
							</div>
						</div>
					</div>
				</div>
			</div>
   
        `;
    }
});