//your code here
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Questions</title>
    <style>
        .questions {
            background-color: #f8fffe;
            height: 50px;
            margin-top: 20px;
            padding: 15px;
            max-width: 600px;
            border-left: 8px solid green;
            font-family: Arial, sans-serif;
        }
    </style>
</head>
<body>
    <script>
        const questions = [
            "Who was the first female to become the governor of an Indian state?",
            "Who among first Woman to climb Mount Everest twice?",
            "Who is President of India?"
        ];

        const body = document.querySelector('body');

        questions.forEach(question => {
            const blockquote = document.createElement('blockquote');
            blockquote.className = 'questions';

            const p = document.createElement('p');
            p.textContent = question;

            blockquote.appendChild(p);
            body.appendChild(blockquote);
        });
    </script>
</body>
</html>
