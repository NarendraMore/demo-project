import { Component, OnInit } from '@angular/core';
import { PowerBiService } from '../power-bi.service';

@Component({
  selector: 'app-pbidemo',
  templateUrl: './pbidemo.component.html',
  styleUrls: ['./pbidemo.component.css']
})
export class PbidemoComponent implements OnInit {

  constructor(private powerbiservice:PowerBiService){}

  ngOnInit()
  {
    const reportId = 'd4e2a4c9-7b36-4243-bd50-9324bae056d9';
    const embedUrl = 'https://app.powerbi.com/view?r=eyJrIjoiOWUxYTQwNDItMDZkMy00OTM2LTkxYTItMjMwZWNlOGIwMmM0IiwidCI6IjVlZDVkZDY0LTM4MGItNDJlNC1iYmFmLTc0MThhNTk0YjBmZiJ9';
    const accessToken ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNWVkNWRkNjQtMzgwYi00MmU0LWJiYWYtNzQxOGE1OTRiMGZmLyIsImlhdCI6MTY3ODM1ODA4NSwibmJmIjoxNjc4MzU4MDg1LCJleHAiOjE2NzgzNjMwODIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFwWnF0SkF4RENKYjN6Q0dmK3pUdmo3UEhVbmlGckpHdHBUUWtGWnlLRDV0MXJrMnJqYnFwZWhRVEd6WXRSaEkyIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjI5M2ExOThkLWNjZmMtNGNlNC1hMWQxLWE5MzA0OWI2ZTI0ZiIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoiUGF0dG5heWFrIiwiZ2l2ZW5fbmFtZSI6IktoaXJvZCIsImlwYWRkciI6IjExNi43NC4yMzkuMTI2IiwibmFtZSI6IktoaXJvZCBQYXR0bmF5YWsiLCJvaWQiOiJhZjY0NjkzYS04OTJlLTQ0ODAtODdhZC1iZjJkZjA2ODZkZDkiLCJwdWlkIjoiMTAwMzIwMDI3REY3MDJEOCIsInJoIjoiMC5BVlVBWk4zVlhnczQ1RUs3cjNRWXBaU3dfd2tBQUFBQUFBQUF3QUFBQUFBQUFBQ0lBT0kuIiwic2NwIjoiRGFzaGJvYXJkLlJlYWQuQWxsIERhc2hib2FyZC5SZWFkV3JpdGUuQWxsIiwic3ViIjoiN3MtY0VoNXhfWEd3NGRXLTY0NWZRbHNUQXh3eEZVTVdKd2hGUkxWMURYdyIsInRpZCI6IjVlZDVkZDY0LTM4MGItNDJlNC1iYmFmLTc0MThhNTk0YjBmZiIsInVuaXF1ZV9uYW1lIjoia2hpcm9kLnBhdHRuYXlha0BhbmVtb2lzb2Z0d2FyZS5jb20uYXUiLCJ1cG4iOiJraGlyb2QucGF0dG5heWFrQGFuZW1vaXNvZnR3YXJlLmNvbS5hdSIsInV0aSI6IkQ2TGpZUV9QNjBDYV9jaUloRVk0QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjliODk1ZDkyLTJjZDMtNDRjNy05ZDAyLWE2YWMyZDVlYTVjMyIsImE5ZWE4OTk2LTEyMmYtNGM3NC05NTIwLThlZGNkMTkyODI2YyIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJlbi1VUyJ9.LcgP1-knYMpnLzOsELrLWMFSl2WgtoOyf_ngVyng_ue2b1XMRLZDDYiD8rDRkgkoCF3WKz63KlylAcBj1RtJEaeu1UogfzCMMxGezeBM27KWNQWMT3kHLdArNNCVspB7uw_nLwZY0URQe1x2fxybsicRp9N6-pvoaz_ShzSvmz0Op6UW0OlqF2C7Aj3j4imjAP0RLL1oD1a4vOfzpmjDz8-7dGlZdX91oR1j56fV_q6q0cTRsBrWXOazoE7i_FYE9BEhyAlKsqK_mk_iAq5tk5YsmgUdCerjGZr1FjbvcKUAr2ImoW09AkPKNMSylDwZgH4MW_zcGvFVKjX6HNkWqQ';
    
  }

}
