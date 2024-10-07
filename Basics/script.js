class BIT {
public:
    vector<int> bit;
    int n;
    BIT(int size) : n(size) {
        bit.assign(n + 1, 0);
    }
    void upd(int ind, int val) {
        while (ind <= n) {
            bit[ind] += val;
            ind += ind & -ind;
        }
    }
    int qr(int ind) {
        int res = 0;
        while (ind > 0) {
            res += bit[ind];
            ind -= ind & -ind;
        }
        return res;
    }
    int qr(int left, int right) {
        return qr(right) - qr(left - 1);
    }
    int kt(int tar) {
        int ind = 0, msk = 1;
        while (msk <= n) msk <<= 1;
        for (msk >>= 1; msk > 0; msk >>= 1) {
            int nxt = ind + msk;
            if (nxt <= n && bit[nxt] < tar) {
                ind = nxt;
                tar -= bit[nxt];
            }
        }
        return ind + 1;
    }
};
class Solution {
public:
    vector<int> aues(vector<int>& nums, vector<long long>& qr) {
        int n = nums.size();
        int maxVal = *max_element(nums.begin(), nums.end());
        BIT bit(maxVal);
        map<int, int> hsh;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int a = gcd(nums[i], nums[j]);
                hsh[a]++;
            }
        }
        for (auto& [a, b] : hsh) {
            bit.upd(a, b);  
        }
        vector<int> res;
        for (auto q : qr) {
          
            res.push_back(bit.kt(q + 1)); 
        }

        return res;
    }
};