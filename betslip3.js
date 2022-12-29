<script>
let data = [
{
    item: 'MLB',
    subitems: ['To be updated']
  },
{
    item: 'NBA',
    subitems: ['Atlanta Hawks', 'Boston Celtics', 'Brooklyn Nets', 'Charlotte Hornets', 'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons', 'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers', 'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans', 'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers', 'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards']
  },
{
    item: 'NCAAF',
    subitems: ['Air Force', 'Akron', 'Alabama', 'Appalachian State', 'Arizona', 'Arizona State', 'Arkansas', 'Arkansas State', 'Army', 'Auburn', 'Ball State', 'Baylor', 'Boise State', 'Boston College', 'Bowling Green', 'Buffalo', 'BYU', 'California', 'Central Michigan', 'Charlotte', 'Cincinnati', 'Clemson', 'Coastal Carolina', 'Colorado', 'Colorado State', 'Connecticut', 'Duke', 'East Carolina', 'Eastern Michigan', 'Florida', 'Florida Atlantic', 'Florida International', 'Florida State', 'Fresno State', 'Georgia', 'Georgia Southern', 'Georgia State', 'Georgia Tech', 'Hawaii', 'Houston', 'Illinois', 'Indiana', 'Iowa', 'Iowa State', 'Kansas', 'Kansas State', 'Kent State', 'Kentucky', 'Liberty', 'Louisiana', 'Louisiana Tech', 'Louisiana-Monroe', 'Louisville', 'LSU', 'Marshall', 'Maryland', 'Massachusetts', 'Memphis', 'Miami (FL)', 'Miami (OH)', 'Michigan', 'Michigan State', 'Middle Tennessee State', 'Minnesota', 'Mississippi State', 'Missouri', 'Navy', 'Nebraska', 'Nevada', 'Nevada-Las Vegas', 'New Mexico', 'New Mexico State', 'North Carolina', 'North Carolina State', 'North Texas', 'Northern Illinois', 'Northwestern', 'Notre Dame', 'Ohio', 'Ohio State', 'Oklahoma', 'Oklahoma State', 'Old Dominion', 'Ole Miss', 'Oregon', 'Oregon State', 'Penn State', 'Pitt', 'Purdue', 'Rice', 'Rutgers', 'San Diego State', 'San Jose State', 'SMU', 'South Alabama', 'South Carolina', 'South Florida', 'Southern Mississippi', 'Stanford', 'Syracuse', 'Temple', 'Tennessee', 'Texas', 'Texas A&M', 'Texas Christian', 'Texas State', 'Texas Tech', 'Toledo', 'Troy', 'Tulane', 'Tulsa', 'UAB', 'UCF', 'UCLA', 'USC', 'Utah', 'Utah State', 'UTEP', 'UTSA', 'Vanderbilt', 'Virginia', 'Virginia Tech', 'Wake Forest', 'Washington', 'Washington State', 'West Virginia', 'Western Kentucky', 'Western Michigan', 'Wisconsin', 'Wyoming']
  },
  {
    item: 'NCAAM',
    subitems: ['To be updated']
  },
  {
    item: 'NFL',
    subitems: ['Arizona Cardinals', 'Atlanta Falcons', 'Baltimore Ravens', 'Buffalo Bills', 'Carolina Panthers', 'Chicago Bears', 'Cincinnati Bengals', 'Cleveland Browns', 'Dallas Cowboys', 'Denver Broncos', 'Detroit Lions', 'Green Bay Packers', 'Houston Texans', 'Indianapolis Colts', 'Jacksonville Jaguars', 'Kansas City Chiefs', 'Las Vegas Raiders', 'Los Angeles Chargers', 'Los Angeles Rams', 'Miami Dolphins', 'Minnesota Vikings', 'New England Patriots', 'New Orleans Saints', 'New York Giants', 'New York Jets', 'Philadelphia Eagles', 'Pittsburgh Steelers', 'San Francisco 49ers', 'Seattle Seahawks', 'Tampa Bay Buccaneers', 'Tennessee Titans', 'Washington Commanders']
  },
  {
    item: 'NHL',
    subitems: ['To be updated']
  },  
  {
    item: 'Soccer',
    subitems: ['To be updated']
  }, 
];


window.onload = function() {
  var itemSel = document.getElementById("first");
  var subitemSel = document.getElementById("second");

  for (var x in data) {
    itemSel.options[itemSel.options.length] = new Option(data[x].item, x);
  }
  itemSel.onchange = function() {
    //empty 
    subitemSel.length = 1;
    //display correct values
    for (var y of data[this.value].subitems) {
      subitemSel.options[subitemSel.options.length] = new Option(y, y);
    }
  }
}
</script>  
<body>

<h1>Cascading Dropdown Example</h1>

<form name="form1" id="form1" action="/action_page.php">
<label for="first">Sport</label>
    <select id="first" name="first">
      <option value="" selected="selected">Please select sport</option>
    </select>
    <label for="second">Team</label>
    <select id="second" name="second">
      <option value="" selected="selected">Please select team</option>
    </select>
    <br>
  <input type="submit" value="Submit">  
</form>


<div class="form-block-5 w-form">
	<form id="wf-form-Bet-Slip" name="wf-form-Bet-Slip" data-name="Bet Slip" action="www.google.com" method="post" class="form-12">
  <label for="Test" class="field-label-42">Test</label>
  <select id="Test" name="Test" data-name="Test" required="", class="w-select">
  	<option value="1">1</option>
    <option value="2">2</option>
  </select>
  </form>
