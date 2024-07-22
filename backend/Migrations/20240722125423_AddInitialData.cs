using Microsoft.EntityFrameworkCore.Migrations;
using backend.Utilities;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class AddInitialData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
        string adminPasswordHash = PasswordHasher.HashPassword("admin");

        migrationBuilder.Sql($@"
            INSERT INTO Admin (name, passwordhash) VALUES
            ('admin', '{adminPasswordHash}');

            INSERT INTO Users (name, email) VALUES
            ('Mario Rossi', 'marioro@example.com'),
            ('Luca Bianchi', 'lucabi@example.com'),
            ('Paola Verdi', 'paolave@example.com');

            INSERT INTO Books (isbn, title, author, genre) VALUES
            ('9780743273565', 'Il grande Gatsby', 'F. Scott Fitzgerald', 'Narrativa'),
            ('9780451524935', '1984', 'George Orwell', 'Distopico'),
            ('9780061120084', 'Il buio oltre la siepe', 'Harper Lee', 'Narrativa'),
            ('9780141439563', 'Orgoglio e pregiudizio', 'Jane Austen', 'Classico'),
            ('9780316769488', 'Il giovane Holden', 'J.D. Salinger', 'Narrativa'),
            ('9780261102217', 'Lo Hobbit', 'J.R.R. Tolkien', 'Fantasy'),
            ('9780747532743', 'Harry Potter e la Pietra Filosofale', 'J.K. Rowling', 'Fantasy'),
            ('9780544003415', 'Il Signore degli Anelli', 'J.R.R. Tolkien', 'Fantasy'),
            ('9780141441146', 'Jane Eyre', 'Charlotte Brontë', 'Classico'),
            ('9780142437230', 'Moby Dick', 'Herman Melville', 'Avventura'),
            ('9780141439471', 'Frankenstein', 'Mary Shelley', 'Gotico'),
            ('9780486280615', 'Le avventure di Tom Sawyer', 'Mark Twain', 'Avventura'),
            ('9780141439570', 'Il ritratto di Dorian Gray', 'Oscar Wilde', 'Gotico'),
            ('9780060850524', 'Il mondo nuovo', 'Aldous Huxley', 'Fantascienza'),
            ('9780141439556', 'Cime tempestose', 'Emily Brontë', 'Gotico'),
            ('9780385490818', 'Il racconto dell''ancella', 'Margaret Atwood', 'Distopico'),
            ('9780385333849', 'Mattatoio n. 5', 'Kurt Vonnegut', 'Fantascienza'),
            ('9780307389732', 'La strada', 'Cormac McCarthy', 'Distopico'),
            ('9780684833392', 'Comma 22', 'Joseph Heller', 'Satira'),
            ('9781451626650', 'Via col vento', 'Margaret Mitchell', 'Narrativa storica'),
            ('9780140449266', 'Il conte di Montecristo', 'Alexandre Dumas', 'Avventura'),
            ('9781594480003', 'Il cacciatore di aquiloni', 'Khaled Hosseini', 'Narrativa storica'),
            ('9780060883287', 'Cent''anni di solitudine', 'Gabriel García Márquez', 'Realismo magico'),
            ('9780486437955', 'I fratelli Karamazov', 'Fëdor Dostoevskij', 'Fiction filosofica'),
            ('9780140449143', 'I miserabili', 'Victor Hugo', 'Narrativa storica'),
            ('9780140449242', 'Anna Karenina', 'Lev Tolstoj', 'Realismo'),
            ('9780486272719', 'Delitto e castigo', 'Fëdor Dostoevskij', 'Fiction psicologica'),
            ('9780060838676', 'La campana di vetro', 'Sylvia Plath', 'Narrativa semi-autobiografica'),
            ('9780143039433', 'Furore', 'John Steinbeck', 'Commento sociale'),
            ('9780143127529', 'La storia segreta', 'Donna Tartt', 'Fiction psicologica'),
            ('9780679732259', 'Lo straniero', 'Albert Camus', 'Fiction filosofica'),
            ('9780099511431', 'Amata', 'Toni Morrison', 'Narrativa storica'),
            ('9780199536759', 'Middlemarch', 'George Eliot', 'Realismo'),
            ('9780099595867', 'Norwegian Wood', 'Haruki Murakami', 'Narrativa letteraria'),
            ('9780307272119', 'Millennium - Uomini che odiano le donne', 'Stieg Larsson', 'Mistero'),
            ('9780385516525', 'Espiazione', 'Ian McEwan', 'Narrativa storica'),
            ('9780143037743', 'L''ombra del vento', 'Carlos Ruiz Zafón', 'Gotico'),
            ('9780805212358', 'Il processo', 'Franz Kafka', 'Fiction filosofica'),
            ('9780679777523', 'Il Maestro e Margherita', 'Michail Bulgakov', 'Realismo magico'),
            ('9780544176699', 'Il nome della rosa', 'Umberto Eco', 'Mistero storico'),
            ('9780345418913', 'Guida galattica per gli autostoppisti', 'Douglas Adams', 'Fantascienza'),
            ('9780375842207', 'La ladra di libri', 'Markus Zusak', 'Narrativa storica'),
            ('9780385534635', 'Il circo della notte', 'Erin Morgenstern', 'Fantasy'),
            ('9780316055437', 'Il cardellino', 'Donna Tartt', 'Narrativa letteraria'),
            ('9780140439267', 'Piccole donne', 'Louisa May Alcott', 'Classico'),
            ('9781594634024', 'La ragazza del treno', 'Paula Hawkins', 'Thriller psicologico'),
            ('9780061124952', 'L''alchimista', 'Paulo Coelho', 'Narrativa'),
            ('9781250301697', 'La paziente silenziosa', 'Alex Michaelides', 'Thriller psicologico'),
            ('9780140270008', 'La vita di Pi', 'Yann Martel', 'Fiction filosofica'),
            ('9780802130116', 'La strada', 'Cormac McCarthy', 'Distopico'),
            ('9780679755333', 'Infinite Jest', 'David Foster Wallace', 'Satira');
        ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            DELETE FROM Admin WHERE name = 'admin';
            DELETE FROM Users WHERE email IN ('marioro@example.com', 'lucabi@example.com', 'paolave@example.com');
            DELETE FROM Books WHERE isbn IN (
                '9780743273565', '9780451524935', '9780061120084', '9780141439563', '9780316769488',
                '9780261102217', '9780747532743', '9780544003415', '9780141441146', '9780142437230',
                '9780141439471', '9780486280615', '9780141439570', '9780060850524', '9780141439556',
                '9780385490818', '9780385333849', '9780307389732', '9780684833392', '9781451626650',
                '9780140449266', '9781594480003', '9780060883287', '9780486437955', '9780140449143',
                '9780140449242', '9780486272719', '9780060838676', '9780143039433', '9780143127529',
                '9780679732259', '9780099511431', '9780199536759', '9780099595867', '9780307272119',
                '9780385516525', '9780143037743', '9780805212358', '9780679777523', '9780544176699',
                '9780345418913', '9780375842207', '9780385534635', '9780316055437', '9780140439267',
                '9781594634024', '9780061124952', '9781250301697', '9780140270008', '9780802130116',
                '9780679755333'
            );
        ");
        }
    }
}
