# Reasons Behind UI/UX in this project

## Visible search input

User can easily find the input to search from data, since this project mainly focus on displaying data. Button `Cari` to search so user can confirm what to search and not exhausting resource to hit API if using debounce. Case sensitive though.

## Filter and sort

Noticable filter and sort for easy and focus search based on column that shown. __PS__ `Lokasi` filter based on `area_provinsi` column.

## Add button on the side of filter

Add button to add new row to data. Shown by popup a modal so the main page clear of forms and not distracted by many forms if shown in it.

## Simple add row form

I made form to add row into the data simple, providing data(columns) that needed to be input. 

## Tables to display data

Since it's only string/number type of data, so i think it's best to shown them in table. Although the given data consist of `area_provinsi` and `area_kota`, for me it's better to group them together into `lokasi` consist of `area_kota`,`area_provinsi` and make the table look cleaner and less column. `price` formatted to currency IDR making it looks beautiful and shown `tgl_parsed` into readable date using `dayjs` in locale of `id`.

## Spinner and disabled button on add after save

Added spinner to table on fetching and after user save the data to add new row.

## Additional

I wanted to make a pagination for better experience and many things but it's pretty complicated and since the data provided doesn't contain variables needed for pagination like `total_data` so i skipped it.