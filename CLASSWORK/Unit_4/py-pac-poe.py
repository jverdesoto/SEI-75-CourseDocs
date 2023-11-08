# Initialise Game - create board, starting turn
class GameState():
  def __init__(self):
    self.player_turn = 1
    self.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    self.game_in_progress = False
    self.winner = False

  def render(self):
    markers = ['X' if m == 1 else 'O' if m == -1 else ' ' for m in self.board]
    headers = '    A   B   C'
    top = f'1)  {markers[0]} | {markers[1]} | {markers[2]}'
    middle = f'2)  {markers[3]} | {markers[4]} | {markers[5]}'
    bottom = f'3)  {markers[6]} | {markers[7]} | {markers[8]}'
    div = '   -----------'

    print()
    print(headers)
    print()
    print(top)
    print(div)
    print(middle)
    print(div)
    print(bottom)
    print()

  def switch_player(self):
    if self.player_turn == 1:
      self.player_turn = -1
    else:
      self.player_turn = 1

  def update_state(self, cell):
    self.board[cell] = self.player_turn

def init():
  # Welcome Message
  print('----------------------')
  print('Let\'s play Py-Pac-Poe!')
  print('----------------------')
  # Reset board & winner
  board = GameState()
  board.render()
  # Start Game Loop
  board.game_in_progress = True
  while board.game_in_progress:
    turn(board)
  end_game(board)
  
# Gameplay loop - accept input, check valid, check winner, change turn
def turn(board):
  cell = None
  while cell == None:
    choice = player_input(board)
    cell = get_cell(choice)
    if cell == None:
      print('This is not a valid cell, try again')
  if validate_turn(board, cell):
    board.update_state(cell)
    board.render()
  if check_winner(board):
    board.winner = True
    board.game_in_progress = False
  if check_draw(board):
    board.game_in_progress = False
  else:
    board.switch_player()


# Get and return player's input
def player_input(board):
  if board.player_turn == 1:
    prompt = input('Player 1\'s turn (example B2): ').upper()
  else:
    prompt = input('Player 2\'s turn (example B2): ').upper()
  return prompt

# Convert player's input to a valid cell reference
def get_cell(player_input):
  columns = {
    'A': 0,
    'B': 1,
    'C': 2
  }
  if player_input[0] in columns:
    if player_input[1] == '1':
      return columns[player_input[0]]
    elif player_input[1] == '2':
      return columns[player_input[0]] + 3
    elif player_input[1] == '3':
      return columns[player_input[0]] + 6
    else:
      return None
  else:
    return None

# Return True if move is on a cell value == 0
def validate_turn(board, cell):
  return cell >= 0 and board.board[cell] == 0

# Return True if winning pattern found
def check_winner(board):
  check_lines = [
    # Horizontal
    board.board[:3], 
    board.board[3:6], 
    board.board[6:],
    # Vertical
    board.board[:7:3],
    board.board[1:8:3],
    board.board[2::3],
    # Diagonal
    board.board[::4],
    board.board[2::2]
    ]
  
  def all_match(line, board):
    filtered = [val for val in line if val == board.player_turn]
    return True if len(line) == len(filtered) else False
  
  for line in check_lines:
    if all_match(line, board):
      return True
  return False

# Check for a draw - return True if all spaces filled
def check_draw(board):
  return all(board.board)

# End game
def end_game(board):
  if board.winner:
    print('Player 1 is the winner!') if board.player_turn == 1 else print('Player 2 is the winner!')
  else:
    print('The game is a draw!')
  prompt = True
  while prompt:
    play_again = input('Would you like to play again? (y/n)').lower()
    if play_again == 'y':
      prompt = False
      init()
    elif play_again == 'n':
      prompt = False
      exit()
    else:
      print('Invalid input')

init()