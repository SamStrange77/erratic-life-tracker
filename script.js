//0 = Ternary (not done, in progress, finished)
//1 = done/max
console.log('VERSION: 8');
console.log('Global Event 11: 100%');
//0 = Hard-Coded Estimate
//1 = done/max
let index = 1;
let ternaryStates = ['Not Started :(', 'In Progress', 'Done!'];
let colors = 
[
    'rgb(255, 0, 0)',
    'rgb(255, 115, 0)',
    'rgb(255, 115, 0)',
    'rgb(250, 131, 33)',
    'rgb(250, 131, 33)',
    'rgb(255, 196, 0)',
    'rgb(255, 196, 0)',
    'rgb(255, 255, 0)',
    'rgb(255, 255, 0)',
    'rgb(0, 255, 0)',
    'rgb(0,255,0)'
]

let progress = 
{
    "General Mechanics" :
    {
        "Id": "general-mechanics",
        "Type": 0,
        "Value": 0,
        "Weight": 10,
        "List":
        [
            {
                "Name": "Life System",
                "Type": 0,
                "Progress": 75
            },
            {
                "Name": "Drop Loot On Final Death",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "ID System",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Aesthetics",
                "Type": 0,
                "Progress": 40
            }
        ]
    },
    "Personal Wildcards" :
    {
        "Id": "personal-wildcards",
        "Type": 1,
        "Done": 0,
        "Max": 0,
        "Weight": 40,
        "List":
        [
            {
                "Name": "Basic Systems (Assigning, Rolling, Preventing Dupes, etc.)",
                "Type": 0,
                "Progress": 95
            },
            {
                "Name": "Wildcard One",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Two",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Three",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Four",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Five",
                "Type": 0,
                "Progress": 40
            },
            {
                "Name": "Wildcard Six",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Seven",
                "Type": 0,
                "Progress": 40
            },
            {
                "Name": "Wildcard Eight",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Nine",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Ten",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Eleven",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Twelve",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Fourteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Fifteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Sixteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Seventeen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Eighteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Nineteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-One",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Two",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Three",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Four",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Five",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Six",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Seven",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Eight",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Nine",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-One",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Two",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Three",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Four",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Five",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Six",
                "Type": 0,
                "Progress": 0
            }
        ]
    },
    "Global Wildcards" :
    {
        "Id": "global-wildcards",
        "Type": 1,
        "Done": 0,
        "Max": 0,
        "Weight": 40,
        "List":
        [
            {
                "Name": "Basic Systems (Assigning, Rolling, Preventing Dupes, etc.)",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard One",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Two",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Three",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Four",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Five",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Six",
                "Type": 0,
                "Progress": 90
            },
            {
                "Name": "Wildcard Seven",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Eight",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Nine",
                "Type": 0,
                "Progress": 50
            },
            {
                "Name": "Wildcard Ten",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Eleven",
                "Type": 0,
                "Progress": 100
            },
            {
                "Name": "Wildcard Twelve",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Fourteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Fifteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Sixteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Seventeen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Eighteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Nineteen",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-One",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Two",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Three",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Four",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Five",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Six",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Seven",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Eight",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Twenty-Nine",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-One",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Two",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Three",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Four",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Five",
                "Type": 0,
                "Progress": 0
            },
            {
                "Name": "Wildcard Thirty-Six",
                "Type": 0,
                "Progress": 0
            }
        ]
    },
    "Miscellaneous": 
    {
        "Type": 0,
        "Progress": 0,
        "Weight": 10,
        "List":
        [
            {
                "Name": "Miscellaneous",
                "Type": 0,
                "Progress": 50
            }
        ]
    }
}

for (key in progress)
{
    switch (progress[key].Type)
    {
        case 0:
            progress[key].Progress = returnProgress(progress[key].List);
            progress[key].Value = value(progress[key].Progress);
            document.body.innerHTML +=
            `
                <div class = "section">
                    <div class= "centering-box">
                        <b><u>${index}. ${key}: ${ternaryStates[progress[key].Value]}</u></b>
                    </div>
                    <br>
                    <div class="progress-bar">
                        <div class = "completed-progress" style = "max-width: ${progress[key].Progress}%; width: 100%; background-color: ${colors[Math.floor(progress[key].Progress/10)]};">
                            ${progress[key].Progress}%
                        </div>
                    </div>
                    <br><br>
                    <div id = "${progress[key].Id}" class = "list"></div>
                    <button onclick = "show('${progress[key].Id}');"
                            id = "${progress[key].Id}button"
                    >
                        Expand!
                    </button>
                </div>
            `;
            break;
        case 1:
            progress[key].Done = returnDone(progress[key].List);
            progress[key].Max = progress[key].List.length;
            progress[key].Progress = returnProgress(progress[key].List);
            document.body.innerHTML +=
            `
                <div class = "section">
                    <div class= "centering-box">
                        <b><u>${index}. ${key}: ${progress[key].Done}/${progress[key].Max}</u></b>
                    </div>
                    <br>
                    <div class="progress-bar">
                        <div class = "completed-progress" style = "max-width: ${progress[key].Progress}%; width: 100%; background-color: ${colors[Math.floor(progress[key].Progress/10)]};">
                            ${progress[key].Progress}%
                        </div>
                    </div>
                    <br><br>
                    <div id = "${progress[key].Id}" class = "list"></div>
                    <button onclick = "show('${progress[key].Id}');"
                            id = "${progress[key].Id}button"
                    >
                        Expand!
                    </button>
                </div>
            `;
            break;
    }
    for (let i = 0; i<progress[key].List.length; i++)
    {
        switch(progress[key].List[i].Type)
        {
            case 0:
                document.getElementById(`${progress[key].Id}`).innerHTML +=
                `
                    
                    ${i+1}. ${progress[key].List[i].Name}: ${ternaryStates[value(progress[key].List[i].Progress)]}
                    <br>
                    <div class="progress-bar">
                        <div class = "completed-progress" style = "max-width: ${progress[key].List[i].Progress}%; width: 100%; background-color: ${colors[Math.floor(progress[key].List[i].Progress/10)]};">
                            ${progress[key].List[i].Progress}%
                        </div>
                    </div>
                    <br>
                `;
        }
    }
    index++;
}


function returnProgress (obj)
{
    let count = 0;
    let totalPercent = 0;
    console.log(obj);
    obj.forEach
    (
        element => 
        {    
            console.log(element.Progress);
            totalPercent += element.Progress;
            count++;            
        }
    );
    totalPercent/=count;
    totalPercent = Math.floor(totalPercent);

    console.log("TOTAL PERCENT: " + totalPercent + "%");
    return totalPercent;
}

function returnDone (obj)
{
    let count = 0;
    console.log(obj);
    obj.forEach
    (
        element => 
        {    
            count += (value(element.Progress) == 2) ? 1 : 0;            
        }
    );
    return count;
}

function value (percent)
{
    return percent == 0 ? 0 : percent == 100 ? 2 : 1;
}

function show (id)
{
    let list = document.getElementById(id);
    let button = document.getElementById(id+"button");
    console.log(list.style.setProperty('display', 'flex'));
    button.onclick = 
    (
        () =>
        {
            hide(id);
        }
    )
    button.innerHTML = `Collapse!`;
}

function hide (id)
{
    let list = document.getElementById(id);
    let button = document.getElementById(id+"button");
    console.log(list.style.setProperty('display', 'none'));
    button.onclick = 
    (
        () =>
        {
            show(id);
        }
    )
    button.innerHTML = `Expand!`;
}

document.getElementById('overall').innerHTML +=
`
    <div class="progress-bar">
        <div class = "completed-progress" style = "max-width: ${overallProgress()}%; width: 100%; background-color: ${colors[Math.floor(overallProgress()/10)]};">
            ${overallProgress()}%
        </div>
    </div>
`;

function overallProgress()
{
    let total = 0;
    let totalWts = 0;
    for (key in progress)
    {
        totalWts += progress[key].Weight;
        total += progress[key].Weight * returnProgress(progress[key].List);
    }
    return Math.floor(total/totalWts);
}

function showYap ()
{
    let list = document.getElementById('yap');
    let button = document.getElementById("yapbutton");
    console.log(list.style.setProperty('display', 'flex'));
    button.onclick = 
    (
        () =>
        {
            hideYap();
        }
    )
    button.innerHTML = `Collapse Yap!`;
}

function hideYap ()
{
    let list = document.getElementById("yap");
    let button = document.getElementById("yapbutton");
    console.log(list.style.setProperty('display', 'none'));
    button.onclick = 
    (
        () =>
        {
            showYap();
        }
    )
    button.innerHTML = `Expand Yap!`;
}



