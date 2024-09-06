import Game2048 from "../src/game"

describe('Game2048', () => {
    let game: Game2048;

    beforeEach(() => {
        game = new Game2048();
    });

    test('should initialize with a score of 0', () => {
        expect(game.getScore()).toBe(0);
    });

    test('should add a random tile on initialization', () => {
        const board = game.getBoard();
        const nonZeroTiles = board.flat().filter((tile: number) => tile !== 0);
        expect(nonZeroTiles.length).toBe(2);
    });

    test('should move tiles up correctly', () => {
        game['board'] = [
            [2, 0, 0, 2],
            [2, 0, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        game['move']('up');
        expect(game.getBoard()).toEqual([
            [4, 0, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]);
    });

    test('should move tiles down correctly', () => {
        game['board'] = [
            [2, 0, 0, 2],
            [2, 0, 0, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        game['move']('down');
        expect(game.getBoard()).toEqual([
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [4, 0, 0, 4],
        ]);
    });

    test('should move tiles left correctly', () => {
        game['board'] = [
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [2, 2, 0, 0],
        ];
        game['move']('left');
        expect(game.getBoard()).toEqual([
            [4, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [4, 0, 0, 0],
        ]);
    });

    test('should move tiles right correctly', () => {
        game['board'] = [
            [0, 0, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 2, 2],
        ];
        game['move']('right');
        expect(game.getBoard()).toEqual([
            [0, 0, 0, 4],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 4],
        ]);
    });

    test('should update score correctly when tiles are combined', () => {
        game['board'] = [
            [2, 2, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        game['move']('left');
        expect(game.getScore()).toBe(4);
    });

    test('should end game with win message when target score is reached', () => {
        game['board'] = [
            [1024, 1024, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ];
        game['move']('left');
        expect(game.getScore()).toBe(2048);
        // Assuming there's a method to check if the game is active
        expect(game['active']).toBe(false);
    });

    test('should end game with deadlock message when no moves are possible', () => {
        game['board'] = [
            [2, 4, 2, 4],
            [4, 2, 4, 2],
            [2, 4, 2, 4],
            [4, 2, 4, 2],
        ];
        game['checkEndGameCondition']();
        expect(game['active']).toBe(false);
    });
    describe('getMoveDirectionFromKey', () => {
        it('should return the correct direction for arrow keys', () => {
            expect(game['getMoveDirectionFromKey']('ArrowUp')).toBe('up');
            expect(game['getMoveDirectionFromKey']('ArrowDown')).toBe('down');
            expect(game['getMoveDirectionFromKey']('ArrowLeft')).toBe('left');
            expect(game['getMoveDirectionFromKey']('ArrowRight')).toBe('right');
        });

        it('should return the correct direction for WASD keys', () => {
            expect(game['getMoveDirectionFromKey']('w')).toBe('up');
            expect(game['getMoveDirectionFromKey']('s')).toBe('down');
            expect(game['getMoveDirectionFromKey']('a')).toBe('left');
            expect(game['getMoveDirectionFromKey']('d')).toBe('right');
        });

        it('should return null for invalid keys', () => {
            expect(game['getMoveDirectionFromKey']('x')).toBeNull();
            expect(game['getMoveDirectionFromKey']('')).toBeNull();
        });
    });

    describe('handleMove', () => {
        it('should call move and update game state when active', () => {
            const moveSpy = jest.spyOn(game as any, 'move');
            const checkEndGameConditionSpy = jest.spyOn(game as any, 'checkEndGameCondition');
            const addRandomTileSpy = jest.spyOn(game as any, 'addRandomTile');
            const renderSpy = jest.spyOn(game as any, 'render');
            const updateDeadlockProgressBarSpy = jest.spyOn(game as any, 'updateDeadlockProgressBar');

            game['handleMove']('up');

            expect(moveSpy).toHaveBeenCalledWith('up');
            expect(checkEndGameConditionSpy).toHaveBeenCalled();
            expect(addRandomTileSpy).toHaveBeenCalled();
            expect(renderSpy).toHaveBeenCalled();
            expect(updateDeadlockProgressBarSpy).toHaveBeenCalled();
        });

        it('should not call move when not active', () => {
            game['active'] = false;
            const moveSpy = jest.spyOn(game as any, 'move');

            game['handleMove']('up');

            expect(moveSpy).not.toHaveBeenCalled();
        });
    });
});
