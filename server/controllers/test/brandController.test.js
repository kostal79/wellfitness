const BrandController = require('../brandController');
const Brand = require('../../models/brand');
const fs = require('fs');

describe('BrandController', () => {
  let brandController = BrandController;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('create', () => {
    it('should create a new brand', async () => {
      const req = {
        body: {
          name: 'Test Brand',
        },
        file: {
          path: '/path/to/logo.jpg',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      jest.spyOn(Brand, 'findOne').mockResolvedValue(null);
      jest.spyOn(Brand, 'create').mockResolvedValue({ _id: '12345', name: 'Test Brand', logo_ref: '/path/to/logo.jpg' });

      await brandController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ _id: '12345', name: 'Test Brand', logo_ref: '/path/to/logo.jpg' });
    });

    it('should return an error if the brand name already exists', async () => {
      const req = {
        body: {
          name: 'Existing Brand',
        },
        file: {
          path: '/path/to/logo.jpg',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      jest.spyOn(Brand, 'findOne').mockResolvedValue({ name: 'Existing Brand' });

      await brandController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({ message: 'Brand name already exists' });
    });

    it('should handle server errors', async () => {
      const req = {
        body: {
          name: 'Test Brand',
        },
        file: {
          path: '/path/to/logo.jpg',
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      jest.spyOn(Brand, 'findOne').mockRejectedValue(new Error('Database error'));

      await brandController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
    });
  });

  describe('readAll', () => {
    it('should return all brands', async () => {
      const collection = [
        { _id: '1', name: 'Brand 1', logo_ref: '/path/to/logo1.jpg' },
        { _id: '2', name: 'Brand 2', logo_ref: '/path/to/logo2.jpg' },
      ];
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      jest.spyOn(Brand, 'find').mockResolvedValue(collection);

      await brandController.readAll(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(collection);
    });

    it('should handle server errors', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      jest.spyOn(Brand, 'find').mockRejectedValue(new Error('Database error'));

      await brandController.readAll(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
    });
  });

  // Add tests for other controller methods (readOne, update, delete)
});