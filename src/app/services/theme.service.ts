import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false)
  darkMode$ = this.darkMode.asObservable()

  constructor() {}

  initTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem("theme")
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      this.enableDarkMode()
    } else {
      this.disableDarkMode()
    }
  }

  enableDarkMode() {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
    this.darkMode.next(true)
  }

  disableDarkMode() {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
    this.darkMode.next(false)
  }

  toggleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      this.disableDarkMode()
    } else {
      this.enableDarkMode()
    }
  }
}
