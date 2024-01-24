## Blog de Stare

The version that is hosted as GitHub Pages.

## Usage

1. In VSCode, type `Command + j` to open the terminal, if it's not already open.
2. Type `zola serve` and hit Enter to start a local version of the site
   that is accessible at http://127.0.0.1:1111

## Migrate from WordPress to this site

Use the content from `output_1_YYYY_MM_DD`. It's organized per year, month, and day.
Any day from Wordpress is stored in a folder (ex: `ziua-1`).

### Steps

1. Copy any such `ziua-X` folder into `content/blog` folder.

2. Open its `index.md` file and edit its metadata (the first part of the content).
   Take `ziua-0` as an example.
   From this:
   ```
    ---
    title: 'Ziua 1'
    date: '2022-01-12'
    categories:
        - 'viata-asa-cum-e'
    coverImage: 'Ziua-1-final.jpg'
    ---
   ```
   to this:
   ```
    +++
    date = 2022-01-12
    title = "Ziua 1"
    description = "short description din storage"
    authors = ["Biannca Locatelli"]
    [taxonomies]
    tags = []
    [extra]
    math = false
    diagram = false
    image = "images/Ziua-1-final.jpg"
    +++
   ```
   Save the changes (use `Command+s` or use top menu bar).

3. Verify the result in the browser.
   Previously, when you started `zola serve`, it makes this site
   available at address http://127.0.0.1:1111
   Open this address in the browser to see the new post entry in the Blog section and open it.

4. If you do further changes to `index.md` file or that selected day,
   save it (Command+s) and you should see the results in the browser.

5. In the left sidebar, click on the 3rd icon to open the "Source Control" pane.
   Type a message (such as "ziua 1 adaugata") and click Commit.
   Confirm (by clicking "Yes") to stage all your changes.


### Assets

-   `_wp` is the WordPress export and the conversion(s) to Markdown.
