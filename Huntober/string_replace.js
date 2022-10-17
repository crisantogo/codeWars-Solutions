//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


function domainName(site){
    site=site.replace('http://','').replace('https://','').replace('www.','').split('.')
    console.log(site[0])
}

domainName("http://github.com/carbonfive/raygun") ,"github" 
domainName("http://www.zombie-bites.com") ,"zombie-bites"
domainName("https://www.cnet.com") ,"cnet"